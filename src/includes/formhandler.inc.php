<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$username = $_POST["userName"];
	$psswd = $_POST["psswd"];
	$email = $_POST["email"];
	$firstname = $_POST["firstName"];
	$lastname = $_POST["lastName"];


	try {
		require_once "dbh-inc.php";

		$query = "INSERT INTO users (userName, firstName, lastName, psswd, email) VALUES (?,?,?,?,?);";

		$stmt = $pdo->prepare($query);

		$stmt->execute([$username, $firstname, $lastname, $psswd, $email]);

		$pdo = null;
		$stmt = null;
		header("Location: ../index.js");
		die();
	} catch (PDOException $e) {
		die("Query failed: " . $e->getMessage());
	}
} else {
	header("Location: ../index.js");
}
