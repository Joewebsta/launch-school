$(() => {
  let posts = [{
    title: '<em>Lorem ipsum dolor sit amet</em>',
    published: 'April 1, 2015',
    body: '<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. </p>',
    tags: ['one', 'two', 'three', 'four'],
  },
  {
    title: '<em>Lorem ipsum dolor sit amet</em>',
    published: 'April 1, 2015',
    body: '<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. </p>',
    tags: ['one', 'two', 'three', 'four'],
  }
];

  Handlebars.registerPartial('tag', $('#tag').html());
  let postsTemplate = Handlebars.compile($('#posts').html());
  $('body').append(postsTemplate({posts: posts}));
  
  // console.log(postTemplate);
});