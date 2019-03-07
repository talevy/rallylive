# ES Rally Track Config Builder

The esrally track builder is intended to help with the creation of a `track.json`
file that represents a [Rally Track](https://esrally.readthedocs.io/en/stable/track.html).

Optionally choose a dataset and begin adding operations to benchmark!

To demo check out: [https://talevy.github.io/rallylive/](https://talevy.github.io/rallylive/)
Only supports ES >= 7.0-beta1


## After exporting

After you export your track, you are ready to run it in your esrally environment!

To test the track beforehand, run in test-mode (only runs subset of data and validates config):

```
esrally race --track-path=~/Downloads/my-track.json --test-mode
```

to run it on your default distribution:

```
esrally race --track-path=~/Downloads/my-track.json
```

to run it against a specific released binary of ES:

```
esrally race --track-path=~/Downloads/my-track.json --distribution-version=7.0.0-beta1
```

## run UI locally

```
$ yarn install
$ yarn start
```
