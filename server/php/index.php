<?php
/*
 * jQuery File Upload Plugin PHP Example 5.14
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

error_reporting(E_ALL | E_STRICT);
require('UploadHandler.php');
class CustomUploadHandler extends UploadHandler {
    protected function get_user_id() {
        @session_start();
        return $_SESSION['id'];
    }
}
class HandlerFormasPago extends UploadHandler {
    protected function get_user_id() {
        return "formaspago";
    }
}
$upload_handler = new HandlerFormasPago(array(
    'user_dirs' => true
));
