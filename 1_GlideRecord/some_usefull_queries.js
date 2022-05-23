//todo:
var a = new GlideRecord('StoreData');
// Addquery() is used for normal querying and it has a syntax
// inside parenthesis (field name is needed, operator is needed like 'is' 'starts with' etc, and at the nd it should ahave a condition)  
a.addQuery('field', 'condition');
a.addQuery('field', 'is', 'condition')
a.query();

while(a.next()){
	gs.info(a.city);
}

//todo: 
