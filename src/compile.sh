
# file that contains all Code of left div with contacts
cat list.js >../lib/compiledCode.js

# file that contains all code of detail div
cat detail.js >>../lib/compiledCode.js

# main file of project - have to be loaded as last part of compiled file
cat contactList.js >>../lib/compiledCode.js

exit 0
