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
  $i = 0;
  foreach(glob($user_path . '/*') as $file) {
    $param = "'" . str_replace("../", '', $file) . "'";
    echo '<ul><li>' . $file . '</li>
    <li><button onclick="navshowGraph(' . $param . ', ' . $i . ')">Show</button><button>Delete</button></li>
    <li><div id=' . $i . '></div></li>
    </ul>';
  }
  echo "</div>";
//}
?>
