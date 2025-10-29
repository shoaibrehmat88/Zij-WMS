// Copyright (c) 2025, Shoaib Rehmat and contributors
// For license information, please see license.txt
frappe.provide('zij_wms.stock');

frappe.ui.form.on("Purchase Order", {
    onload(frm){
        frm.stock_controller = new zij_wms.stock.StockController({ frm: frm });
    },
	refresh(frm) {
        frm.stock_controller.refresh();
	},
});

frappe.ui.form.on("Purchase Order Item",{
    rate: function(frm, cdt, cdn){
        let row = locals[cdt][cdn];
        updateAmount(frm,row);
    },
    quantity: function(frm, cdt, cdn){
        let row = locals[cdt][cdn];
        updateAmount(frm,row);
    }
});
