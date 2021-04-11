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
        'learning/tasks/git'
      ]
    },{
      type: 'category',
      label: 'HTML・CSS・JavaScript',
      items: [
        'learning/html/html',
        'learning/html/css',
        'learning/html/javascript',
        'learning/tasks/htmlcssjs'
      ]
    },{
      type : 'category',
      label: 'JavaScript',
      items:[
        'learning/js/nodejs',
        'learning/tasks/algorithm',
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