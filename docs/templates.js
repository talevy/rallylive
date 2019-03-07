export const templates = {
    "operation": (operationId) => `
        <li data-id=${operationId} class="operation">
          <form>
          <div class="euiFlexGroup">
            <div class="euiFlexItem">
              <div class="euiFormRow">
                <label class="euiFormLabel">Operation Name</label>
                <input name="name" type="text" class="euiFieldText"></input>
              </div>
            </div>
            <div class="euiFlexItem">
              <div class="euiFormRow">
                <label class="euiFormLabel">Operation Type</label>
                <div class="euiFormControlLayout__childrenWrapper">
                <select name="operation-type" class="opTypeSelect euiSelect">
                  <option selected value="" disabled hidden style="display:none">&#xA0;</option>
                  <option value="bulk">bulk</option>
                  <option value="search">search</option>
                  <option value="force-merge">force-merge</option>
                  <option value="index-stats">index-stats</option>
                  <option value="node-stats">node-stats</option>
                  <option value="put-pipeline">put-pipeline</option>
                  <option value="cluster-health">cluster-health</option>
                  <option value="refresh">refresh</option>
                  <option value="create-index">create-index</option>
                  <option value="delete-index">delete-index</option>
                  <option value="create-index-template">create-index-template</option>
                  <option value="delete-index-template">delete-index-template</option>
                  <option value="shrink-index">shrink-index</option>
                  <option value="raw-request">raw-request</option>
                </select>
                <div class="euiFormControlLayoutIcons euiFormControlLayoutIcons--right"><span class="euiFormControlLayoutCustomIcon"><svg class="euiIcon euiIcon--medium euiFormControlLayoutCustomIcon__icon" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><path id="arrow_down-a" d="M13.069 5.157L8.384 9.768a.546.546 0 0 1-.768 0L2.93 5.158a.552.552 0 0 0-.771 0 .53.53 0 0 0 0 .759l4.684 4.61c.641.631 1.672.63 2.312 0l4.684-4.61a.53.53 0 0 0 0-.76.552.552 0 0 0-.771 0z"></path></defs><use fill-rule="nonzero" xlink:href="#arrow_down-a"></use></svg></span></div>
                </div>
              </div>
            </div>
            <div class="euiFlexItem euiFlexItem--flexGrowZero"><button class="removeOperationButton euiButton euiButton--danger euiButton--small">X</button></div>
          </div>
          <div class="specific">
          </div>
          </form>
        </li>
    `,
    'bulk': (prefill) => `
        <div class="euiFormRow">
          <label class="euiFormLabel">index</label>
          <input name="index" type="text" class="euiFieldText" value="${prefill.index}"></input>
          <label class="euiFormLabel">bulk-size</label>
          <input name="bulk-size" type="text" class="euiFieldText" value="${prefill.bulkSize || '300'}"></input>
          <label class="euiFormLabel">ingest-percentage (optional)</label>
          <input name="ingest-percentage" type="text" class="euiFieldText"></input>
        </div>
    `,
    'search': (prefill) => `
        <div class="euiFormRow">
          <label class="euiFormLabel">index (optional)</label>
          <input name="index" type="text" class="euiFieldText" value="${prefill.index || ''}"></input>
          <label class="euiFormLabel">type (optional)</label>
          <input name="type" type="text" class="euiFieldText" value="${prefill.type || ''}"></input>
          <label class="euiFormLabel">cache (optional)</label>
          <input name="cache" type="text" class="euiFieldText" value="${prefill.cache || ''}"></input>
          <label class="euiFormLabel">request-params (optional)</label>
          <input name="request-params" type="text" class="euiFieldText" value="${prefill.requestParams || ''}"></input>
          <label class="euiFormLabel">pages (optional)</label>
          <input name="pages" type="text" class="euiFieldText" value="${prefill.pages || ''}"></input>
          <label class="euiFormLabel">results-per-page (optional)</label>
          <input name="results-per-page" type="text" class="euiFieldText" value="${prefill.resultsPerPage || ''}"></input>
          <label class="euiFormLabel">Body</label>
          <textarea name="body" class="euiTextArea euiTextArea--resizeVertical" value="${prefill.body || ''}"></textarea>
        </div>
    `,
    'force-merge': (prefill) => `
        <div class="euiFormRow">
          <label class="euiFormLabel">max-num-segments</label>
          <input name="max-num-segments" type="text" class="euiFieldText" value="${prefill.maxNumSegments || ''}"></input>
        </div>
    `,
    'index-stats': (prefill) => `
    `,
    'node-stats': (prefill) => `
    `,
    'put-pipeline': (prefill) => `
        <div class="euiFormRow">
          <label class="euiFormLabel">id</label>
          <input name="id" type="text" class="euiFieldText" value="${prefill.id || ''}"></input>
          <label class="euiFormLabel">Body</label>
          <textarea name="body" class="euiTextArea euiTextArea--resizeVertical" value="${prefill.body || ''}"></textarea>
          <div class="codeEdit"></div>
        </div>
    `,
    'cluster-health': (prefill) => `
        <div class="euiFormRow">
          <label class="euiFormLabel">request-params (optional)</label>
          <input name="request-params" type="text" class="euiFieldText" value="${prefill.requestParams || ''}"></input>
          <label class="euiFormLabel">index (optional)</label>
          <input name="index" type="text" class="euiFieldText" value="${prefill.index || ''}"></input>
        </div>
    `,
    'refresh': (prefill) => `
        <div class="euiFormRow">
          <label class="euiFormLabel">index (defaults to "_all")</label>
          <input name="index" type="text" class="euiFieldText" value="${prefill.index || '_all'}"></input>
        </div>
    `,
    'create-index': (prefill) => `
        <div class="euiFormRow">
          <label class="euiFormLabel">index</label>
          <input name="index" type="text" class="euiFieldText" value="${prefill.index || ''}"></input>
          <label class="euiFormLabel">Body</label>
          <textarea name="body" class="euiTextArea euiTextArea--resizeVertical">${prefill.body || ''}</textarea>
        </div>
    `,
    'delete-index': (prefill) => `
        <div class="euiFormRow">
          <label class="euiFormLabel">index</label>
          <input name="index" type="text" class="euiFieldText" value="${prefill.index || ''}"></input>
        </div>
    `,
    'create-index-template': (prefill) => `
        <div class="euiFormRow">
          <label class="euiFormLabel">template</label>
          <input name="template" type="text" class="euiFieldText" value="${prefill.template || ''}"></input>
          <label class="euiFormLabel">body</label>
          <textarea name="body" class="euiTextArea euiTextArea--resizeVertical" value="${prefill.body || ''}"></textarea>
          <label class="euiFormLabel">request-params (optional)</label>
          <input name="request-params" type="text" class="euiFieldText" value="${prefill.requestParams || ''}"></input>
        </div>
    `,
    'delete-index-template': (prefill) => `
        <div class="euiFormRow">
          <label class="euiFormLabel">template</label>
          <input name="template" type="text" class="euiFieldText" value="${prefill.template || ''}"></input>
          <label class="euiFormLabel">only if exists</label>
          <input name="only-if-exists" type="text" class="euiFieldText" value="${prefill.onlyIfExists || ''}"></input>
          <label class="euiFormLabel">delete matching indices</label>
          <input name="delete-matching-indices" type="text" class="euiFieldText" value="${prefill.deleteMatchingIndices || ''}"></input>
          <label class="euiFormLabel">index pattern</label>
          <input name="index-pattern" type="text" class="euiFieldText" value="${prefill.indexPattern || ''}"></input>
          <label class="euiFormLabel">request-params (optional)</label>
          <input name="request-params" type="text" class="euiFieldText" value="${prefill.requestParams || ''}"></input>
        </div>
    `,
    'shrink-index': (prefill) => `
        <div class="euiFormRow">
          <label class="euiFormLabel">source-index</label>
          <input name="source-index" type="text" class="euiFieldText" value="${prefill.sourceIndex || ''}"></input>
          <label class="euiFormLabel">target-index</label>
          <input name="target-index" type="text" class="euiFieldText" value="${prefill.targetIndex || ''}"></input>
          <label class="euiFormLabel">target-body</label>
          <textarea name="target-body" class="euiTextArea euiTextArea--resizeVertical" value="${prefill.targetBody || ''}"></textarea>
        </div>
    `,
    'raw-request': (prefill) => `
    `,
}

export const corpora = {
    "nyc_taxis": {
        "name": "nyc_taxis",
        "base-url": "http://benchmarks.elasticsearch.org.s3.amazonaws.com/corpora/nyc_taxis",
        "documents": [
          {
            "source-file": "documents.json.bz2",
            "#COMMENT": "ML benchmark rely on the fact that the document count stays constant.",
            "document-count": 165346692,
            "compressed-bytes": 4812721501,
            "uncompressed-bytes": 79802445255
          }
        ]
    },
    "geopoint": {
        "name": "geopoint",
        "base-url": "http://benchmarks.elasticsearch.org.s3.amazonaws.com/corpora/geopoint",
        "documents": [
          {
            "source-file": "documents.json.bz2",
            "document-count": 60844404,
            "compressed-bytes": 505295401,
            "uncompressed-bytes": 2448564579
          }
        ]
    },
    "eventdata": {
        "name": "eventdata",
        "base-url": "http://benchmarks.elasticsearch.org.s3.amazonaws.com/corpora/eventdata",
        "documents": [
          {
            "source-file": "eventdata.json.bz2",
            "document-count": 20000000,
            "compressed-bytes": 791796014,
            "uncompressed-bytes": 16437108429
          }
        ]
    },
    "geonames": {
        "name": "geonames",
        "base-url": "http://benchmarks.elasticsearch.org.s3.amazonaws.com/corpora/geonames",
        "documents": [
            {
                "source-file": "documents-2.json.bz2",
                "document-count": 11396505,
                "compressed-bytes": 264698741,
                "uncompressed-bytes": 3547614383,
                "target-index": "geonames"
            }
        ]
    }
}

export const corporaIndices = {
    "nyc_taxis": {
        "settings": {
            "index.number_of_shards": 1,
            "index.number_of_replicas": 0
        },
        "mappings": {
            "_source": {
                "enabled": true
            },
            "properties": {
                "surcharge": {
                    "scaling_factor": 100,
                    "type": "scaled_float"
                },
                "dropoff_datetime": {
                    "type": "date",
                    "format": "yyyy-MM-dd HH:mm:ss"
                },
                "trip_type": {
                    "type": "keyword"
                },
                "mta_tax": {
                    "scaling_factor": 100,
                    "type": "scaled_float"
                },
                "rate_code_id": {
                    "type": "keyword"
                },
                "passenger_count": {
                    "type": "integer"
                },
                "pickup_datetime": {
                    "type": "date",
                    "format": "yyyy-MM-dd HH:mm:ss"
                },
                "tolls_amount": {
                    "scaling_factor": 100,
                    "type": "scaled_float"
                },
                "tip_amount": {
                    "scaling_factor": 100,
                    "type": "scaled_float"
                },
                "payment_type": {
                    "type": "keyword"
                },
                "extra": {
                    "scaling_factor": 100,
                    "type": "scaled_float"
                },
                "vendor_id": {
                    "type": "keyword"
                },
                "store_and_fwd_flag": {
                    "type": "keyword"
                },
                "improvement_surcharge": {
                    "scaling_factor": 100,
                    "type": "scaled_float"
                },
                "fare_amount": {
                    "scaling_factor": 100,
                    "type": "scaled_float"
                },
                "ehail_fee": {
                    "scaling_factor": 100,
                    "type": "scaled_float"
                },
                "cab_color": {
                    "type": "keyword"
                },
                "dropoff_location": {
                    "type": "geo_point"
                },
                "vendor_name": {
                    "type": "text"
                },
                "total_amount": {
                    "scaling_factor": 100,
                    "type": "scaled_float"
                },
                "trip_distance": {
                    "scaling_factor": 100,
                    "type": "scaled_float"
                },
                "pickup_location": {
                    "type": "geo_point"
                }
            },
            "dynamic": "strict"
        }
    },
    "geopoint": {
        "settings": {
            "index.number_of_shards": 1,
            "index.number_of_replicas": 0
        },
        "mappings": {
            "dynamic": "strict",
            "_source": {
                "enabled": true
            },
            "properties": {
                "location": {
                    "type": "geo_point"
                }
            }
        }
    },
    "eventdata": {
        "settings": {
            "index.number_of_shards": 1,
            "index.number_of_replicas": 0
        },
        "mappings": {
            "dynamic": "strict",
            "_source": {
                "enabled": true
            },
            "properties": {
                "@timestamp": { "type": "date" },
                "message": { "type": "text", "index": false },
                "agent": { "type": "keyword", "ignore_above": 256 },
                "bytes": { "type": "integer" },
                "clientip": { "type": "ip" },
                "httpversion": { "type": "keyword", "ignore_above": 256 },
                "response": { "type": "short" },
                "verb": { "type": "keyword", "ignore_above": 256 },
                "tags": { "type": "keyword", "ignore_above": 256 },
                "geoip": {
                    "properties": {
                        "country_name": { "type": "keyword" },
                        "location": { "type": "geo_point" }
                    }
                },
                "useragent": {
                    "properties": {
                        "name": { "type": "keyword", "ignore_above": 256 },
                        "os": { "type": "keyword", "ignore_above": 256 },
                        "os_name": { "type": "keyword", "ignore_above": 256 }
                    }
                },
                "request": {
                    "norms": false,
                    "type": "text",
                    "fields": {
                        "keyword": { "ignore_above": 256, "type": "keyword" }
                    }
                },
                "referrer": {
                    "norms": false,
                    "type": "text",
                    "fields": {
                        "keyword": { "ignore_above": 256, "type": "keyword" }
                    }
                }
            }
        }
    },
    "geonames": {
        "settings": {
            "index.number_of_shards": 1,
            "index.number_of_replicas": 0,
            "index.store.type": "hybridfs"
        },
        "mappings": {
            "dynamic": "strict",
            "_source": {
                "enabled": true
            },
            "properties": {
                "elevation": {
                    "type": "integer"
                },
                "name": {
                    "type": "text",
                    "fields": {
                        "raw": {
                            "type": "keyword"
                        }
                    }
                },
                "geonameid": {
                    "type": "long"
                },
                "feature_class": {
                    "type": "text",
                    "fields": {
                        "raw": {
                            "type": "keyword"
                        }
                    }
                },
                "location": {
                    "type": "geo_point"
                },
                "cc2": {
                    "type": "text",
                    "fields": {
                        "raw": {
                            "type": "keyword"
                        }
                    }
                },
                "timezone": {
                    "type": "text",
                    "fields": {
                        "raw": {
                            "type": "keyword"
                        }
                    }
                },
                "dem": {
                    "type": "text",
                    "fields": {
                        "raw": {
                            "type": "keyword"
                        }
                    }
                },
                "country_code": {
                    "type": "text",
                    "fielddata": true,
                    "fields": {
                        "raw": {
                            "type": "keyword"
                        }
                    }
                },
                "admin1_code": {
                    "type": "text",
                    "fields": {
                        "raw": {
                            "type": "keyword"
                        }
                    }
                },
                "admin2_code": {
                    "type": "text",
                    "fields": {
                        "raw": {
                            "type": "keyword"
                        }
                    }
                },
                "admin3_code": {
                    "type": "text",
                    "fields": {
                        "raw": {
                            "type": "keyword"
                        }
                    }
                },
                "admin4_code": {
                    "type": "text",
                    "fields": {
                        "raw": {
                            "type": "keyword"
                        }
                    }
                },
                "feature_code": {
                    "type": "text",
                    "fields": {
                        "raw": {
                            "type": "keyword"
                        }
                    }
                },
                "alternatenames": {
                    "type": "text",
                    "fields": {
                        "raw": {
                            "type": "keyword"
                        }
                    }
                },
                "asciiname": {
                    "type": "text",
                    "fields": {
                        "raw": {
                            "type": "keyword"
                        }
                    }
                },
                "population": {
                    "type": "long"
                }
            }
        }
    }
}