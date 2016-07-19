walk(document.body);

// From Stack Overflow
// Walks through page looking at words
function walk(node) 
{
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
            replaceWords(node);
			break;
	}
}

// Replaces words
function replaceWords(textNode) {
	var val = textNode.nodeValue;

    // Replace Priest with Daed Class.
    val = val.replace(/\bPriest/g, function(match, p1, p2, offset, string) {
        return "Daed Class";
    });

    // Replace priest with daed class.
    val = val.replace(/\bpriest/g, function(match, p1, p2, offset, string) {
        return "daed class";
    });

    // Replace priest with daed class.
    val = val.replace(/Priest/g, function(match, p1, p2, offset, string) {
        return "DaedClass";
    });
	    textNode.nodeValue = val;
}


