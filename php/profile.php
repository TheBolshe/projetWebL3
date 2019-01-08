<?php
/**
* @return bool
*/
function is_session_started()
{
    if ( php_sapi_name() !== 'cli' ) {
        if ( version_compare(phpversion(), '5.4.0', '>=') ) {
            return session_status() === PHP_SESSION_ACTIVE ? TRUE : FALSE;
        } else {
            return session_id() === '' ? FALSE : TRUE;
        }
    }
    return FALSE;
}

/*if (session_status() != 2) {
  echo '<p id="text">You must be logged</p>';
} else {
*/
  session_start();
  $user_path = "../data/recordings/" . $_SESSION["session_name"];
  echo '<div id="text">';
  foreach(glob($user_path . '/*') as $file) {

    echo '<ul><li>' . $file . '</li>
    <li><button onclick="navshowGraph(' . str_replace("../", "", $file) . ')">Show</button><button>Delete</button></li>
    <li><div id="graphs"></div></li>
    </ul>';
  }
  echo "</div>";
//}
?>
