frappe.provide("zij_wms.stock");

zij_wms.stock.StockController = class StockController extends frappe.ui.form.Controller {    
    refresh() {
        let frm = this.frm;
        if (frm.doc.docstatus == 1){
            frm.add_custom_button(
				__("Accounting Ledger"),
				function () {
					frappe.route_options = {
                        voucher_type: frm.doc.doctype,
						voucher: frm.doc.name,
						from_date: frm.doc.date,
						to_date: moment(frm.doc.modified).format("YYYY-MM-DD"),
					};
					frappe.set_route("query-report", "Accounting Ledger");
				},
				__("Ledger")
            );
            frm.add_custom_button(
				__("Stock Ledger"),
				function () {
					frappe.route_options = {
                        voucher_type: frm.doc.doctype,
						voucher: frm.doc.name,
						from_date: frm.doc.date,
						to_date: moment(frm.doc.modified).format("YYYY-MM-DD"),
					};
					frappe.set_route("query-report", "Stock Ledger");
				},
				__("Ledger")
            )

        }
    }
};

function updateAmount(frm,row){
    let amount = row.quantity * row.rate;
    row.amount = amount;
    frm.refresh_field('items');
}
