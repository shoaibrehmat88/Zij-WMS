// Copyright (c) 2025, Shoaib Rehmat and contributors
// For license information, please see license.txt

frappe.ui.form.on("Bin", {
    onload(frm){
		frm.set_query("rack", function (doc) {
			return {
				filters: {
					location: doc.location,
				},
			};
		});
		frm.set_query("shelf", function (doc) {
			return {
				filters: {
					location: doc.location,
                    rack: doc.rack
				},
			};
		});
    },
    refresh(frm) {

	},
});
