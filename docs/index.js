import { $parent, $delegate } from './helpers.js'
import { templates, corpora, corporaIndices } from './templates.js'

class Track {
    constructor() {
        this.opLife = 0
        this.operations = {}
        this.name = 'my-track'
        this.corpus = null
    }

    updateOperation(newOperation) {
        this.operations[newOperation.id] = newOperation
    }

    removeOperation(operationId) {
        delete this.operations[operationId]
    }

    createEmptyOperation() {
        let op = new Operation(this.opLife++, {})
        this.updateOperation(op)
        return op
    }

    asJson() {
        var schedule = []
        var that = this
        Object.keys(this.operations).sort().forEach(function(k) {
            schedule.push({ "operation": that.operations[k].obj })
        })
        var content = {
            "name": this.name,
            "default": true,
            "schedule": schedule,
            "client": 8,
            "warmup-iterations": 1000,
            "iterations": 1000,
            "target-throughput": 100
        }

        if (this.corpus) {
            content['corpora'] = [corpora[this.corpus]]
        }

        return JSON.stringify(content, null, 2)
    }
}

class Operation {
    constructor(id, obj) {
      this.id = id
      this.obj = obj
    }
 }


class View {
    constructor() {
        this.$operationList = document.getElementById("operationList")
        this.$addOperationButton = document.getElementById("addOperationBtn")
        this.$exportTrack = document.getElementById("trackExport")
        this.$trackName = document.getElementById("trackName")
        this.$corpusSelector = document.getElementById("corpusSelector")
    }

    bind(event, handler) {
        var that = this;
        if (event === 'addOperation') {
            this.$addOperationButton.addEventListener('click', function() {
                handler()
            })
        }
        else if (event === 'removeOperation') {
            $delegate(this.$operationList, '.removeOperationButton', 'click', function(event) {
                event.preventDefault()
                handler($parent(this, 'li').dataset.id)
            })
        }
        else if (event === 'setOpType') {
            $delegate(this.$operationList, '.opTypeSelect', 'change', function(event) {
                let parent = $parent(this, 'li')
                let form = parent.querySelector('form')
                handler[0](parent.dataset.id, this.value)
                handler[1](parent.dataset.id, new FormData(form))
                form.addEventListener('change', function(event) {
                    handler[1](parent.dataset.id, new FormData(form))
                })
            })
        }
        else if (event === 'exportTrack') {
            this.$exportTrack.addEventListener('click', function() {
                handler()
            })
        }
        else if (event === 'setTrackName') {
            this.$trackName.addEventListener('change', function() {
                handler(this.value)
            })
        }
        else if (event === 'corpusSelected') {
            this.$corpusSelector.addEventListener('change', function() {
                handler(this.value)
            })
        }
    }

    renderNewOperation(newOperation) {
        this.$operationList.insertAdjacentHTML('beforeend', templates.operation(newOperation.id))
    }

    removeOperation(operationId) {
        this.$operationList.removeChild(this.$operationList.querySelector(`[data-id='${operationId}']`))
    }

    specializeOperation(operationId, opType, prefill) {
        if (prefill) {
            var opSelect = this.$operationList.querySelector(`[data-id='${operationId}'] [name='operation-type']`)
            opSelect.value = opType
            var opName = this.$operationList.querySelector(`[data-id='${operationId}'] [name='name']`)
            opName.value = opType
        }
        var item = this.$operationList.querySelector(`[data-id='${operationId}'] .specific`)
        item.innerHTML = templates[opType](prefill || {})
    }

    prefillField(operationId, fieldName, value) {
        var fields = this.$operationList.querySelector(`[data-id='${operationId}'] .specific`)
        var input = fields.querySelector(`[name='${fieldName}']`)
        input.value = value
    }

    getFormData(operationId) {
        var l = this.$operationList.querySelector(`[data-id='${operationId}'] form`)
        return new FormData(l)
    }
}

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    bindModelAndView() {
        var that = this;
        that.view.bind('addOperation', function(newOperation) {
            let op = that.model.createEmptyOperation()
            that.view.renderNewOperation(op)
        })

        that.view.bind('removeOperation', function(id) {
            that.model.removeOperation(id)
            that.view.removeOperation(id)
        })

        var formToOp = function(opId, formData) {
            var obj = {}
            formData.forEach(function (value, key) {
                if (value !== '') {
                    if (key === 'body' || key === 'request-params') {
                        var parsed = JSON.parse(value)
                        obj[key] = parsed
                    } else {
                        obj[key] = value
                    }
                }
            })
            return new Operation(opId, obj)
        }

        that.view.bind('setOpType', [function(opId, opType) {
            that.view.specializeOperation(opId, opType)
        }, function(opId, formData){
            let op = formToOp(opId, formData)
            that.model.updateOperation(op)
        }])

        that.view.bind('setTrackName', function(name) {
            that.model.name = name
        })

        that.view.bind('corpusSelected', function(corpus) {
            that.model.corpus = corpus
            // prefill and inject create-index
            {
                let op = that.model.createEmptyOperation()
                that.view.renderNewOperation(op)
                let indexJson = JSON.stringify(corporaIndices[corpus], null, 2)
                that.view.specializeOperation(op.id, "create-index", { "index": corpus, "body": indexJson })
                that.model.updateOperation(formToOp(op.id, that.view.getFormData(op.id)))
            }
            // prefill and inject bulk
            {
                let op = that.model.createEmptyOperation()
                that.view.renderNewOperation(op)
                that.view.specializeOperation(op.id, "bulk", { "index": corpus })
                that.model.updateOperation(formToOp(op.id, that.view.getFormData(op.id)))
            }
        })

        that.view.bind('exportTrack', function() {
            let trackJson = that.model.asJson()
            console.log(trackJson)
            var el = document.createElement('a')
            el.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(trackJson));
            el.setAttribute('download', that.model.name + ".json");
            el.style.display = 'none'
            document.body.appendChild(el)
            el.click()
            document.body.removeChild(el)
        })
    }
}

class App {
    constructor() {
        this.model = new Track()
        this.view = new View()
        this.controller = new Controller(this.model, this.view)
        this.controller.bindModelAndView()
    }
}

let app
window.addEventListener('load', function() {
    app = new App()
})