# Copyright (c) 2025, Shoaib Rehmat and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from zij_wms.controllers.stock import Stock


class PurchaseOrder(Stock, Document):
	
	def on_submit(self):
		self.update_stock_ledger()
