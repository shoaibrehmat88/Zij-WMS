# Copyright (c) 2025, Shoaib Rehmat and contributors
# For license information, please see license.txt

import frappe
from frappe import _

def execute(filters=None):
	columns, data = get_columns(), []
	data = frappe.db.sql(f"""SELECT voucher_type,voucher,item,quantity,rate,amount,party_type,party,posting_date,location,rack,shelf,bin 
					  FROM `tabStock Ledger` 
					  WHERE voucher_type = '{filters.get('voucher_type')}' and voucher = '{filters.get('voucher')}' and posting_date between '{filters.get('from_date')}' and '{filters.get('to_date')}'
					  ORDER by date_time asc""",as_dict=True)
	return columns, data

def get_columns():
	return [
		{
			"label": _("Party Type"),
			"fieldname": "party_type",
			"fieldtype": "Link",
			"options":"Doctype",
			"width": 100
		},
		{
			"label": _("Party"),
			"fieldname": "party",
			"fieldtype": "Dynamic Link",
			"options": "party_type",
			"width": 150
		},
		{
			"label": _("Item"),
			"fieldname": "item",
			"fieldtype": "Link",
			"options": "Item",
			"width": 200
		},
		{
			"label": _("Quantity"),
			"fieldname": "quantity",
			"fieldtype": "Int",
			"width": 100
		},
		{
			"label": _("Rate"),
			"fieldname": "rate",
			"fieldtype": "Currency",
			"width":150
		},
		{
			"label": _("Amount"),
			"fieldname": "amount",
			"fieldtype": "Currency",
			"width":150
		},
		{
			"label": _("Posting Date"),
			"fieldname": "posting_date",
			"fieldtype": "Date",
			"width":150
		},
		{
			"label": _("Voucher Type"),
			"fieldname": "voucher_type",
			"fieldtype": "Link",
			"options": "Doctype",
			"width":150
		},
		{
			"label": _("Voucher"),
			"fieldname": "voucher",
			"fieldtype": "Dynamic Link",
			"options": "voucher_type",
			"width":150
		},
		{
			"label": _("Bin"),
			"fieldname": "bin",
			"fieldtype": "Link",
			"options": "Bin",
			"width":150
		},
		{
			"label": _("Location"),
			"fieldname": "location",
			"fieldtype": "Link",
			"options": "Location",
			"width":150
		},
		{
			"label": _("Rack"),
			"fieldname": "rack",
			"fieldtype": "Link",
			"options": "rack",
			"width":150
		},
		{
			"label": _("Shelf"),
			"fieldname": "shelf",
			"fieldtype": "Link",
			"options": "shelf",
			"width":150
		}
	]
