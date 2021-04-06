# ![gluestick logo](https://cdn.statically.io/gh/hotgluexyz/gluestick/master/assets/gs-icon.svg) gluestick by hotglue
<p>
  <a href="https://1c1dl.csb.app"><img src="https://img.shields.io/badge/demo-View%20demo-red" alt="demo"></a>
  <a href="https://docs.gluestick.xyz"><img src="https://img.shields.io/badge/docs-Read%20docs-blueviolet" alt="docs"></a>
  <a href="https://bit.ly/2KBGGq1"><img src="https://img.shields.io/badge/slack-Join%20Slack-blue" alt="join slack"></a>
  <a href="https://www.npmjs.com/package/gluestick-elements"><img src="https://img.shields.io/npm/v/gluestick-elements.svg" alt="npm package"></a>
  <a href="https://hub.docker.com/r/hotglue/gluestick-api"><img src="https://img.shields.io/badge/dockerhub-Image-9cf" alt="dockerhub"/></a>
</p>

An open source and self-hosted CSV import button for your web app.

---

[![demo](https://cdn.statically.io/gh/hotgluexyz/gluestick/master/assets/FileAcceptor.png)](https://1c1dl.csb.app)

## Info

### Motivation
We want to provide a light-weight and simple way to integrate user data from CSVs, with a great UI and strong mapping functionality. 

### Links
- [Homepage](https://gluestick.xyz)
- [Documentation](https://docs.gluestick.xyz)
- [Source](https://github.com/hotgluexyz/gluestick)
- [Issues](https://github.com/hotgluexyz/gluestick/issues)
- [Slack](https://bit.ly/2KBGGq1)

### Sandbox
- [CodeSandbox Demo](https://1c1dl.csb.app)
- [CodeSandbox Sample](https://codesandbox.io/s/gluestick-demo-1c1dl)

## CLI

Simple developer CLI to install, configure, and deploy the gluestick API. 
Designed to make it easy to get up and running very quickly.

### Functionality
1. Install gluestick-api (pull from Docker Hub, create initial config)
2. Configure gluestick-api – generates `gluestick.json` which is converted to a `gluestick-env.list` and passed to the Docker container
3. Deploy to the cloud (Heroku, AWS, Azure, GCP, etc.)

### Install

```bash
pip install gluestick
```

### Usage

```bash
$ gluestick config target

Where do you want final data to go? (s3, Cloud Storage): s3
What S3 bucket do you want to use?: bucket
What is your AWS Access Key Id?: ABCDEF******
What is your AWS Secret Access Key?:
Repeat for confirmation:

Configuration saved
```
