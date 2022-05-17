var problemGR = GlideRecord('problem');
problemGR.query();
// these methods basically check the current use have the authority or not
if (problemGR.canCreate() && problemGR.canRead() && problemGR.canUpdate() && canDelete()); {
    gs.print("yes u got the authority");
}