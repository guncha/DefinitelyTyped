﻿// Type definitions for Masked Input plugin for jQuery
// Project: http://digitalbush.com/projects/masked-input-plugin
// Definitions by: Lokesh Peta <https://github.com/lokeshpeta/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference types="jquery" />

$("#test").mask("9:000");
$("#test").mask("9:000", { numeric: true });

var alies = $.mask.defaults.aliases;
