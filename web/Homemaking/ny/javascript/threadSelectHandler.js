/**
 * Thread Select Handler.
 */
// 1 - read, 2 - insert, 4 - update, 8 - delete, 16 - grant, 32 - upfile.
var PERMIT_ALL_LIST     = new Array("1", "2", "4", "8", "16", "32");
var DEFAULT_PERMIT_LIST = new Array("1", "2");
var SOURCE_SELECT_LIST  = new Array("allGroups", "allRoles", "allUsers");
var PERMIT_PREFIX = "PERMIT_PREFIX_";

function toggleOption(sltSource, sltDestination, toRemove) {
    if (sltSource.selectedIndex >= 0) {
        var objOption = sltSource.options[sltSource.selectedIndex];
        if (optionPosition(objOption.value, sltDestination) == -1 && sltDestination != null) {
            var newOption = document.createElement("OPTION");
            newOption.text  = objOption.text ;
            newOption.value = objOption.value;
            sltDestination.add(newOption, 0);
        }
        if (toRemove == true)
            sltSource.remove(sltSource.selectedIndex);
    }
}

function optionPosition(objValue, objSelect) {
    if (objSelect != null) {
        for (var i = 0; i < objSelect.length; i++) {
            if (objSelect.options[i].value == objValue)
                return i;
        }
    }
    return -1;
}

function initSelect(objContainer, sltDestination, toRemove) {
    var elements = objContainer.value.split(VERTICAL);
    for (i = 0; i < elements.length; i++ ) {
        if (elements[i].length > 0) {
            var elements2 = elements[i].split(COLON);
            if (elements2[0].length < 1)
                continue;
            for (var j = 0; j < SOURCE_SELECT_LIST.length; j++) {
                var sltSource = document.all[SOURCE_SELECT_LIST[j]];
                var pos       = optionPosition(elements2[0], sltSource);
                if (pos > -1) {
                    var objOption = sltSource.options[pos];
                    var newOption = document.createElement("OPTION");
                    newOption.text  = objOption.text ;
                    newOption.value = objOption.value;
                    sltDestination.add(newOption, 0);
                    break;
                }
                if (toRemove == true)
                    sltSource.remove(pos);
            }
        }
    }
}

function addValue(permitObj, permitCode, objContainer) {
    var values    = objContainer.value;
    var elements1 = values.split(VERTICAL);
    for (var i = 0; i < elements1.length; i++) {
        var permitMap = elements1[i];
        if (permitMap != null) {
            var elements2 = permitMap.split(COLON);
            if (permitObj != elements2[0]) {
                continue;
            } else {
                var permits = elements2[1];
                if ((parseInt(permits) & parseInt(permitCode)) == 0) {
                    permits = parseInt(permits) + parseInt(permitCode);
                    var newPermitMap = permitObj + COLON + permits;
                    if (permits <= 0)
                        newPermitMap = "";
                    objContainer.value = values.replace(permitMap, newPermitMap);
                    return 1;
                }
                return -1;
            }
        }
    }
    objContainer.value += permitObj + COLON + permitCode + VERTICAL;
    
    return 1;
    
}

function removeValue(permitObj, permitCode, objContainer) {
    var values    = objContainer.value;
    var elements1 = values.split(VERTICAL);
    for (var i = 0; i < elements1.length; i++) {
        var permitMap = elements1[i];
        if (permitMap != null) {
            var elements2 = permitMap.split(COLON);
            if (permitObj != elements2[0]) {
                continue;
            } else {
                var permits = elements2[1];
                if ((parseInt(permits) >= parseInt(permitCode)) && ((parseInt(permits) & parseInt(permitCode)) >= 1)) {
                    permits = parseInt(permits) - parseInt(permitCode);
                    var newPermitMap = permitObj + COLON + permits;
                    if (permits <= 0) {
                        newPermitMap = "";
                        objContainer.value = values.replace(permitMap + VERTICAL, newPermitMap);
                        return 1;
                    }
                    objContainer.value = values.replace(permitMap, newPermitMap);
                    return 2;
                }
                return 3;
            }
        }
    }
    return 4;
}




/////////////////
////////////////
function changeValue(sltSource, sltDestination, checkboxSource, objContainer) {
    var objOption = sltSource.options[sltSource.selectedIndex];
    if (checkboxSource.checked == true) {
        var addResult = addValue(objOption.value, checkboxSource.value, objContainer);
    } else {
        var removeResult = removeValue(objOption.value, checkboxSource.value, objContainer);
        if (removeResult == 1) {
            toggleOption(sltSource, sltDestination, true);
            unableAllPermits();
        }
    }
}

function addPermitObj(sltSource, sltDestination, objContainer) {
    if (sltSource.selectedIndex >=0) {
        var objOption = sltSource.options[sltSource.selectedIndex];
        if (optionPosition(objOption.value, sltDestination) == -1) {
            for (var i = 0; i < DEFAULT_PERMIT_LIST.length; i++) {
                addValue(objOption.value, DEFAULT_PERMIT_LIST[i], objContainer);
            }
        }
    }
    toggleOption(sltSource, sltDestination, false);
}

function removePermitObj(sltSource, sltDestination, objContainer) {
    if (sltSource.selectedIndex >=0) {
        var objOption = sltSource.options[sltSource.selectedIndex];
        for (var i = 0; i < PERMIT_ALL_LIST.length; i++) {
            removeValue(objOption.value, PERMIT_ALL_LIST[i], objContainer);
        }
    }
    toggleOption(sltSource, sltDestination, true);
    unableAllPermits();
}

function activateCheckbox(sltSource, objContainer) {
    if (sltSource.selectedIndex >=0) {
        var objOption = sltSource.options[sltSource.selectedIndex];
        var values    = objContainer.value;
        var elements1 = values.split(VERTICAL);
        var permits   = null;
        for (var i = 0; i < elements1.length; i++) {
            var permitMap = elements1[i];
            if (permitMap != null) {
                var elements2 = permitMap.split(COLON);
                if (objOption.value != elements2[0]) {
                    continue;
                } else {
                    permits = elements2[1];
                    break;
                }
            }
        }
        
        if (permits != null) {
            for (var i = 0; i < PERMIT_ALL_LIST.length; i++) {
                document.all[PERMIT_PREFIX + PERMIT_ALL_LIST[i]].disabled = false;
                if ((parseInt(permits) & parseInt(PERMIT_ALL_LIST[i])) >= 1) {
                    document.all[PERMIT_PREFIX + PERMIT_ALL_LIST[i]].checked = true;
                } else {
                    document.all[PERMIT_PREFIX + PERMIT_ALL_LIST[i]].checked = false;
                }
            }
        }
        
    }
}

function unableAllPermits() {
    for (var i = 0; i < PERMIT_ALL_LIST.length; i++) {
        document.all[PERMIT_PREFIX + PERMIT_ALL_LIST[i]].disabled = true;
    }
}

