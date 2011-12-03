var _ = require('common/util');
var TextView = require('ui').TextView;
var ListView = require('../lib/ListView').ListView;

_.extend(exports, {
	':load': function() {
	    var test = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
        var list = [];
        var reuse;
        test.forEach(function(item) {
            reuse = new TextView({
                label: item,
                style: {
                    'background-color': '#00ff00',
                    width: 'fill-parent',
                    align: 'center'
                }
            });
            
            // To enable focus behavior on list item
            reuse.on('focus', function() {
                this.style({
                    'background-color': '#ff0000'
                });
            });
            reuse.on('blur', function() {
                this.style({
                    'background-color': '#00ff00'
                });
            });
            
            // What the list item does when it's clicked
            reuse.callback = function() {
                console.log('CALLBACK! ' + item);
            };
            
            list.push(reuse);
        });
	    
	    // ListView example using title
	    var listView = new ListView(list, 'ListView Title Test');
	    
	    // ListView example without title
	    // var listView = new ListView(list);
	    
	    this.add('list', listView);
	},

	':keypress': function(key) {
	    
	    // Delegate up, down, fire, b, B, t, T to ListView
	    // b, B used to jump to the bottom of the list
	    // t, T used to jump to the top of the list
	    if (key === 'up' || key === 'down'
	           || key === '84' || key === '116'
	           || key === '66' || key === '98' 
	           || key === 'fire') {
	               
	       this.get('list').emit('keypress', key);   
	    }
	}
});
