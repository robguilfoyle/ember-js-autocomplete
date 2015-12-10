import DS from 'ember-data';

export
default DS.Model.extend({
  type: DS.attr('string'),
  description: DS.attr('string'),
  title: DS.attr('string'),
  updatedAt: DS.attr('date'),

  link: Ember.computed('type', function() {
    switch (this.get('type')) {
      case 'Product':
        return `product/${this.get('id')}`;
      case 'Vendor':
        return `vendor/${this.get('id')}`;
      case 'ReviewAuthor':
        return `review-author/${this.get('id')}`;
      case 'Review':
        return `review/${this.get('id')}`;
    }
  })
});
