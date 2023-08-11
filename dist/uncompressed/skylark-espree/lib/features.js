define([],function(){
	/**
	 * @fileoverview The list of feature flags supported by the parser and their default
	 *      settings.
	 * @author Nicholas C. Zakas
	 */

	//------------------------------------------------------------------------------
	// Requirements
	//------------------------------------------------------------------------------

	// None!

	//------------------------------------------------------------------------------
	// Public
	//------------------------------------------------------------------------------

	return  {

	    // React JSX parsing
	    jsx: false,

	    // allow return statement in global scope
	    globalReturn: false,

	    // allow implied strict mode
	    impliedStrict: false
	};

});
