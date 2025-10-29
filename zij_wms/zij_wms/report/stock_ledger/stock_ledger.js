// Copyright (c) 2025, Shoaib Rehmat and contributors
// For license information, please see license.txt

frappe.query_reports["Stock Ledger"] = {
	"filters": [
		{
			fieldname: "voucher_type",
			label: __("Voucher Type"),
			fieldtype: "Select",
			options: ["Purchase Order","Sales Order"],			
			reqd: 1,
		},
		{
			fieldname: "voucher",
			label: __("Voucher"),
			fieldtype: "Dynamic Link",
			get_options: function () {		
				var voucher_type = frappe.query_report.get_filter_value("voucher_type");
				var voucher = frappe.query_report.get_filter_value("voucher");
				if (voucher && !voucher_type) {
					frappe.throw(__("Please select voucher Type first"));
				}
				return voucher_type;
			},
			reqd: 1,
		},
		{
			fieldname: "from_date",
			label: __("From Date"),
			fieldtype: "Date",
			default: frappe.datetime.add_months(frappe.datetime.get_today(), -1),
			reqd: 1,
		},
		{
			fieldname: "to_date",
			label: __("To Date"),
			fieldtype: "Date",
			default: frappe.datetime.get_today(),
			reqd: 1,
		},

	]
};
