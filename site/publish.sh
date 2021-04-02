# Build the website
rm -rf out
npm run export || { echo 'Build failed' ; exit -1; }

# Deploy
aws s3 cp out s3://gluestick.xyz/ --acl public-read --exclude "*.html" --recursive

# Upload HTML files without extension
(find out -type f -name '*.html' | while read HTMLFILE; do
  HTMLFILESHORT=${HTMLFILE:4}
  HTMLFILE_WITHOUT_INDEX=${HTMLFILESHORT::${#HTMLFILESHORT}-5}

  echo "${HTMLFILE} -> ${HTMLFILE_WITHOUT_INDEX}"

  aws s3 cp ${HTMLFILE} \
    s3://gluestick.xyz/$HTMLFILE_WITHOUT_INDEX
done)

printf "[SUCCESS] gluestick website published"
