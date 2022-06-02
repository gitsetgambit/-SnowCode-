//for parsing normal XML 
var xmlString = 'XML';
var xmlDoc = new XMLDocument2();
xmlDoc.parseXML(xmlString);
gs.print(xmlDoc.getNodeText('//active'));
