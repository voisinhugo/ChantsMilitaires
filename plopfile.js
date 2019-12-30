const fs = require('fs');
const dir = './src/data';

fs.readdir(dir, (err, files) => {
  var newId = files.length - 1;
  console.log(`${newId}\n`);
});

module.exports = function(plop) {
  // song generator
  plop.setGenerator('song', {
    description: 'adding a song',
    prompts: [
      {
        type: 'input',
        name: 'id',
        message: 'id please',
      },
      {
        type: 'input',
        name: 'name',
        message: 'song name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/data/{{ pascalCase name}}.json',
        templateFile: 'plop-templates/song.template',
        abortOnFail: false,
      },
      {
        type: 'append',
        path: 'src/data/index.js',
        template:
          "import {{ pascalCase name}} from './{{ pascalCase name}}.json';\n",
        pattern: /^/,
        separator: '',
      },
      {
        type: 'append',
        path: 'src/data/index.js',
        template: '  {{ pascalCase name}},\n',
        pattern: 'export default [\n',
        separator: '',
      },
    ],
  });
};
