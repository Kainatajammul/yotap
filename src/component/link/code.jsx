<div
{...provided.droppableProps}
ref={provided.innerRef}
className="content-links"
>
{/* allLinks */}
{items?.map((elm, index) => (
  <Draggable
    key={elm.linkId}
    draggableId={elm.name}
    index={index}
  >
    {(provided) => (
      <>
        <div
          className="single-link"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="link-inner">
            <div
              className="link-left"
              // style={{ border: "1px solid black" }}
            >
              <RiDraggable />
              <div className="icon-container">
                {/* <FaRedditAlien style={{ color: "white" }} /> */}
                {returnIcons(elm.name, 16)}
              </div>
              <p>{elm?.name}</p>
            </div>

            <div className="link-right">
              <div
                className="remove-btn"
                onClick={() => {
                  setlinkId(elm.linkId),
                    dispatch(openCustomModal());
                }}
              >
                Remove Link
              </div>
              <div
                className="open-btn"
                onClick={() => openUrl(elm?.value)}
              >
                Open Link
              </div>
            </div>
          </div>
        </div>
      </>
    )}
  </Draggable>
))}
{provided.placeholder}
</div>