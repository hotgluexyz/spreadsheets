# ![gluestick logo](./assets/gs-icon.svg) gluestick by hotglue
<p>
  <a href="https://bit.ly/2KBGGq1"><img src="https://img.shields.io/badge/Slack-Join%20Slack-orange" alt="join slack"></a>
</p>

An open source and self-hosted file CSV import button for your web app. Designed to be a free alternative to flatfile.

## Motivation

We want to provide a light-weight and simple way to integrate user data from CSVs, with a great UI and strong mapping functionality. 

## Functionality

### Admin
1. Define the schema (likely directly in JSON in some type of CLI)
2. Define a target (see Meltano target CLI configuration)
3. Run the backend (see below for details)
4. Accept the files (directly in the browser via JSON serialized data, or to some target)

### User (React elements)
1. Upload file
2. Do necessary mapping
3. Verify data looks correct
4. Approve (sent to hook / piped to target)

## Code bases

### Elements

Simple reusable React components that handle file upload, file mapping, and (maybe? allow passing the mapping from the front end). Should be able to work with any backend, not just ours.

### Back-end

The real magic is a Python + Docker based mapping code that can handle very large files (ie. >10GB). 

We’d offer a Python-based Flask API (also wrapped in Docker) to access it and self-host. Similar to meltano.

Could also have automatic targets rather than having to send to a web service yourself (S3, Blob Storage, etc.)

