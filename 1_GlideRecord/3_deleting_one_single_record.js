var deleteGR = new GlideRecord('incident');
deleteGR.addQuery('short_description', 'test incident');
deleteGR.query();
gs.info(deleteGR.caller_id.getDisplayedValue());
while (deleteGR.next()) {
    deleteGR.deleteRecord();
}