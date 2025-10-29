// Copyright (c) 2025, Shoaib Rehmat and contributors
// For license information, please see license.txt

frappe.ui.form.on("Shelf", {
    onload(frm){
		frm.set_query("rack", function (doc) {
			return {
				filters: {
					location: doc.location,
				},
			};
		});
    },
	refresh(frm) {

	},
});
