<?php
// Exit if accessed directly
if ( ! defined('ABSPATH') ) { exit; }

/**
 * Call the class
 */
Mailbard_Ajax::get_instance();


/**
 * The class
 */
class Mailbard_Ajax {

	/**
     * @var  object  Instance of this class
     */
    protected static $instance = null;

	/**
	 * Initialize the class and set its properties.
	 */
	public function __construct() {

		add_filter( 'wp_ajax_mailbard-get-nonce', array( $this, 'get_nonce' ) );
		add_filter( 'wp_ajax_nopriv_mailbard-get-nonce', array( $this, 'get_nonce' ) );

	}

    public static function get_instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}
	
	
	public static function get_nonce() {
	
		$nonce = wp_create_nonce("mailbard_ajax");
		
		$return = array(
			'nonce' => $nonce,
		);
		
		echo( json_encode( $return ) );
		exit;
		
	}

}
