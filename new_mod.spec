/*
A KBase module: new_mod
*/

module new_mod {
    typedef structure {
        string report_name;
        string report_ref;
    } ReportResults;

    /*
        This example function accepts any number of parameters and returns results in a KBaseReport
    */
    funcdef run_new_mod(mapping<string,UnspecifiedObject> params) returns (ReportResults output) authentication required;

};
