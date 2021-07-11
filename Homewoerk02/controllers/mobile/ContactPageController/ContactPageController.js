define({ 

  flag:true,
  flagEdit:true,

  onViewCreated: function() {
    this.view.init = this.init;
    this.view.preShow = this.preShow;
  },

  init: function() {
    this.view.ContactsContainer.onClick = this.clicked;
    this.view.SwitchTheme.onSlide = this.changeTheme;
    this.view.EditLbl.onTouchStart = this.edit;
  },

  preShow: function() {
    var contact = kony.store.getItem("contactDetails");
    this.view.ContactTextFlexContainer.NameLbl.text = contact.name;
    this.view.ContactImgFlxContainer.ContactImg.src = contact.src;
    this.view.PhoneFlexContainer.txtPhoneRounded.text = contact.phone;
    this.view.EmailFlexContainer.EmailBox.text = contact.email;
    this.view.PhoneFlexContainer.setEnabled(false);
    this.view.EmailFlexContainer.setEnabled(false);
    this.view.NotesFlexContainer.setEnabled(false);
  },

  edit:function(){
    if(this.flagEdit){
      this.view.PhoneFlexContainer.setEnabled(true);
      this.view.EmailFlexContainer.setEnabled(true);
      this.view.NotesFlexContainer.setEnabled(true);
      
      this.view.EditLbl.text = "Save";
      this.view.PhoneFlexContainer.txtPhoneRounded.setFocus(true);
      this.flagEdit = false;
    }else{
      this.view.NotesFlexContainer.setFocus(true);
      
      this.view.PhoneFlexContainer.setEnabled(false);
      this.view.EmailFlexContainer.setEnabled(false);
      this.view.NotesFlexContainer.setEnabled(false);
      this.view.EditLbl.text = "Edit";
      this.flagEdit = true;
      alert("Contact is saved!");
    }
  },

  clicked: function(){
    var ntf = new kony.mvc.Navigation("ContactList");
    ntf.navigate();
  },

  changeTheme: function(){
    function onsuccesscallback() {
      alert(`Successfully change Theme`);
    }

    function onerrorcallback() {
      alert("Skin does not exist");
    }

    if(this.flag){
      kony.theme.setCurrentTheme("DarkTheme", onsuccesscallback, onerrorcallback);
      this.flag = false;
    }else{
      kony.theme.setCurrentTheme("MyTheme", onsuccesscallback, onerrorcallback);
      this.flag = true;
    }
  },

});