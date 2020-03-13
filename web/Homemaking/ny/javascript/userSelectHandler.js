/**
 * User Select Handler.
 */

function toggleOption(sltSource, sltDestination, toRemove) {
    if (sltSource.selectedIndex >=0) {
        var objOption = sltSource.options[sltSource.selectedIndex];
        if (optionPosition(objOption.value, sltDestination) == -1) {
            var newOption = document.createElement("OPTION");
            newOption.text  = objOption.text ;
            newOption.value = objOption.value;
            sltDestination.add(newOption, 0);
        }
        if (toRemove == true) {
            sltSource.remove(sltSource.selectedIndex);
        }
    }
}

function optionPosition(objValue, objSelect) {
    for (var i = 0; i < objSelect.length; i++) {
        if (objSelect.options[i].value == objValue) {
            return i;
        }
    }
    return -1;
}

function initOptions(sltSource, sltDestination, objContainer, toRemove) {
    var elements = objContainer.value.split(VERTICAL);
    for (i = 0; i < elements.length; i++) {
        var value = elements[i];
        if (value != null && value.length > 2) {
            value = value.substring(1, value.length - 1);
            var pos = optionPosition(value, sltSource);
            if (pos > -1) {
                var objOption = sltSource.options[pos];
                var newOption = document.createElement("OPTION");
                newOption.text  = objOption.text ;
                newOption.value = objOption.value;
                sltDestination.add(newOption, 0);
            }
            if (toRemove == true) {
                sltSource.remove(pos);
            }
        }
    }
}

function pumpValues(objSelect, objContainer) {
    objContainer.value = "" ;
    for (i = 0; i < objSelect.length; i++) {
        objContainer.value += MBRACKET_L + objSelect.options[i].value + MBRACKET_R + VERTICAL;
    }
}
