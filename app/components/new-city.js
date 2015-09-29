import Ember from 'ember';

export default Ember.Component.extend({
  addCityForm: false,
  actions: {
    showCityForm() {
      this.set('addCityForm', true);
    },

    saveCity() {
      var params = {
        name: this.get('name'),
        country: this.get('country'),
        attractions: this.get('attractions')
      };
      this.set('addCityForm', false),
      this.sendAction('saveCity', params);
    }
  }
});
