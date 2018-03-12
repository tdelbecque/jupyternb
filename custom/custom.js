function CEHJ_setHeaderTitle (title) {
    title = title || "Companie d'éducation de la haute joux"
    var n = document.getElementById ("header-container")
    n.innerHTML = "<div>" + title + "</div>"
    //n.style.fontFamily = "Snell Roundhand, cursive"
    n.style.fontFamily = "cursive"
    n.style.fontSize = "2em"    
}

function CEHJ_createMenuTopEntry (id, title) {
    var e0 = document.createElement ("li")
    e0.class = "dropdown"
    var e1 = document.createElement ("a")
    e1.href = "#"
    e1.class = "dropdown-toggle"
    e1.dataset.toggle = "dropdown"
    e1.textContent = title
    e0.appendChild (e1)
    var e2 = document.createElement ("ul")
    e2.id = id
    e2.class = "dropdown-menu"
    e0.appendChild (e2)
    return e0
}

function  CEHJ_appendTopEntry (e) {
    document.getElementById ("file_menu").parentElement.parentElement.appendChild (e)
}

function CEHJ_appendTopEntryifNotExist (id, title) {
    if (! document.getElementById (id)) {
	var e = CEHJ_createMenuTopEntry (id, title)
	if (e) CEHJ_appendTopEntry (e)
    }
}

function CEHJ_setMenuTopEntryDisplayStyle (id, display) {
    var e =  document.getElementById (id)
    e.parentElement.style.display = display
}

function CEHJ_setDisplayForIds (ids, display) {
}

CEHJ_JupyterMenuTopEntriesIds = ["file_menu", "edit_menu", "view_menu", "insert_menu",
				 "cell_menu", "kernel_menu", "widget-submenu", "help_menu"]
    
function CEHJ_setMenuForUser () {
    var display = "none"
    _.each (CEHJ_JupyterMenuTopEntriesIds,
	    function (id) {CEHJ_setMenuTopEntryDisplayStyle (id, display)})
    document.getElementById ("kernel_indicator").style.display = display

    CEHJ_appendTopEntryifNotExist ("cehj-file-menu", "Fichiers")
    CEHJ_appendTopEntryifNotExist ("cehj-myspace-menu", "Mon espace")
    
    document.getElementById ("cehj-file-menu").parentElement.style.display = "initial"
    document.getElementById ("cehj-myspace-menu").parentElement.style.display = "initial"

}

function CEHJ_setMenuForAdmin () {
    var display = "initial"
    _.each (CEHJ_JupyterMenuTopEntriesIds,
	    function (id) {CEHJ_setMenuTopEntryDisplayStyle (id, display)})
    document.getElementById ("kernel_indicator").style.display = display
    CEHJ_setMenuTopEntryDisplayStyle ("cehj-file-menu", "none")
    CEHJ_setMenuTopEntryDisplayStyle ("cehj-myspace-menu", "none")

}

function CEHJ_setHeader () {
    CEHJ_setHeaderTitle ()
    CEHJ_setMenuForUser ()
}


/*
                <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Edit</a>
                    <ul id="edit_menu" class="dropdown-menu">
                        <li id="cut_cell"><a href="#">Cut Cells</a></li>
                        <li id="copy_cell"><a href="#">Copy Cells</a></li>
                        <li id="paste_cell_above" class="disabled"><a href="#">Paste Cells Above</a></li>
                        <li id="paste_cell_below" class="disabled"><a href="#">Paste Cells Below</a></li>
                        <li id="paste_cell_replace" class="disabled"><a href="#">Paste Cells &amp; Replace</a></li>
                        <li id="delete_cell"><a href="#">Delete Cells</a></li>
                        <li id="undelete_cell" class="disabled"><a href="#">Undo Delete Cells</a></li>
                        <li class="divider"></li>
                        <li id="split_cell"><a href="#">Split Cell</a></li>
                        <li id="merge_cell_above"><a href="#">Merge Cell Above</a></li>
                        <li id="merge_cell_below"><a href="#">Merge Cell Below</a></li>
                        <li class="divider"></li>
                        <li id="move_cell_up"><a href="#">Move Cell Up</a></li>
                        <li id="move_cell_down"><a href="#">Move Cell Down</a></li>
                        <li class="divider"></li>
                        <li id="edit_nb_metadata"><a href="#">Edit Notebook Metadata</a></li>
                        <li class="divider"></li>
                        <li id="find_and_replace"><a href="#"> Find and Replace </a></li>
                        <li class="divider"></li>
                        <li id="cut_cell_attachments"><a href="#">Cut Cell Attachments</a></li>
                        <li id="copy_cell_attachments"><a href="#">Copy Cell Attachments</a></li>
                        <li id="paste_cell_attachments" class="disabled"><a href="#">Paste Cell Attachments</a></li>
                        <li class="divider"></li>
                        <li id="insert_image" class="disabled"><a href="#"> Insert Image </a></li>
                    </ul>
                </li>
*/
