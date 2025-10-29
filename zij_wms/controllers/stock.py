import frappe

class Stock():

    def update_stock_ledger(self):
        if self.doctype == "Purchase Order":
            party_type, party = "Vendor", "vendor"
        else:
            party_type, party = "Customer", "customer"
        for item in self.items:            
            stock = frappe.new_doc("Stock Ledger")
            stock.voucher_type = self.doctype
            stock.voucher = self.name
            stock.party_type = party_type
            stock.party = self.get(party)
            stock.reference_item = item.name
            stock.item = item.item
            stock.quantity = item.quantity
            stock.rate = item.rate
            stock.amount = item.amount
            stock.posting_date = self.date
            stock.date_time = frappe.utils.now()
            stock.location = item.location
            stock.rack = item.rack
            stock.shelf = item.shelf
            stock.bin = item.bin
            stock.save()
