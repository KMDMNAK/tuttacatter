module.exports = {
  learn: [
    {
      type: 'category',
      label: '準備',
      items: [
        'learning/prepare/introduction',
        'learning/prepare/loadmap',
        'learning/prepare/commandline',
        'learning/prepare/environment',
        'learning/prepare/github',
        'learning/tasks/about'
      ]
    },{
      type: 'category',
      label: 'Git',
      items: [
        'learning/git/intro',
        'learning/git/task-intro',
        'learning/git/branch',
        'learning/git/task-branch'
      ]
    },{
      type: 'category',
      label: 'HTML・CSS・JavaScript',
      items: [
        'learning/html/html',
        'learning/html/css',
        'learning/html/javascript',
        'learning/html/task-htmlcssjs'
      ]
    },{
      type : 'category',
      label: 'JavaScript',
      items:[
        'learning/js/js',
        'learning/js/nodejs',
        'learning/js/task-node',
        'learning/js/task-algorithm',
      ]
    },
    {
      type: 'category',
      label:'フレームワーク',
      items:[
        'learning/framework/index',
        'learning/framework/frontend'
      ]
    }
  ],
  docs: [
    {
      type: 'category',
      label: '概要',
      items: [
        'abstract/about'
      ]
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api/auth',
        'api/user',
        'api/view']
    }
  ]
}