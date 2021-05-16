AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
    this.handleClickEvents();
  },
  handleViewState:function(){
    const el=this.el
    const id=el.getAttribute("id")
    const placesContainer=document.querySelector("#places-container")
    const {selectedItemId}=placesContainer.getAttribute("cursor-listener")
    const sideViewPlacesid=["H2.jpg","H3.jpg","H4.jpg","H5.jpg"]

    if(sideViewPlacesid.includes(id)){
      placesContainer.setAttribute("tour",{
        state:"view",
      })
    const skyel=document.querySelector("#main-container")
    skyel.setAttribute("material",{
      src:`./assets/360_images/${selectedCard}/${id}.jpg`,
      color:"white"
    })
  }

  },
  handleClickEvents:function(){
    this.el.addEventListener("click",evt=>{
      const placesContainer=document.querySelector("#places-container") 
      const{state}=placesContainer.getAttribute("tour")
      if(state==="places-list"){
        const id=this.el.getAttribute("id")
        const placesid=[
          "Krishna Palace"
        ];
        if(placesid.includes(id)){
          placesContainer.setAttribute("tour",{
            state:"view",
            selectedCard:id
          }) }
      }
      if(state==="view"){
        this.handleViewState()
      }
      if(state==="change-view"){
        this.handleViewState()
      }
    })
  },
  handlePlacesListState: function () {
    const id = this.el.getAttribute("id");
    const placesId = [ "Krishna Palace"];
    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#places-container");
      placeContainer.setAttribute("cursor-listener", {
        selectedItemId: id,
      });
      this.el.setAttribute("material", {
        color: "red",
        opacity: 1,
      });
    }
  },
  handleMouseEnterEvents: function () {
    //Cursor 'mouseenter' Events
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesListState();
    });
  },
  handleMouseLeaveEvents: function () {
    //Cursor 'mouseleave' Events
    this.el.addEventListener("mouseleave", () => {
      const { selectedItemId } = this.data;
      if (selectedItemId) {
        const el = document.querySelector(`#${selectedItemId}`);
        const id = el.getAttribute("id");
        if (id == selectedItemId) {
          el.setAttribute("material", {
            color: "green",
            opacity: 1,
          });
        }
      }
    });
  },
});
