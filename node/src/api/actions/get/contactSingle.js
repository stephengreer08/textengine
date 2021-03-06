class ContactSingle {
    
    /**
     * Constructor
     * 
     * @param {Contacts} contactModel The contacts model object 
     */
    constructor(contactModel) {
        this.contactModel = contactModel
        this.action = this.action.bind(this)
    }

    /**
     * Get contact by ID
     * 
     * @param {string} id The contact id
     */
    action(id) {
        return this.contactModel.find({ id })
    }
}

module.exports = ContactSingle