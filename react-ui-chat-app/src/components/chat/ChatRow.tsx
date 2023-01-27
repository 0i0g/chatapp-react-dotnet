import React, {useEffect, useRef} from 'react';
import classes from './Chat.module.css';
import Avatar from "../avatar/Avatar";
import {combineClasses} from "../../utils/component";
import Scrollbars from "react-custom-scrollbars";
import {IChatRow} from "../../@type/chatType";

type Props = {
  chatRow: IChatRow,
}

const ChatRow = ({chatRow}: Props) => {

  return (
      chatRow.isSelf ? (<div className={combineClasses(classes.chatRow, classes.self)}>
            <div className={classes.content}>
              <div className={classes.msg}>
                <span className={classes.line}>{chatRow.msg.text}</span>
              </div>
            </div>
          </div>
      ) : (<div className={classes.chatRow}>
        <div className={classes.avatar}>
          <Avatar style={{width: 30, height: 30, marginRight: 5}}/>
        </div>
        <div className={classes.content}>
          <div className={classes.msg}>
            <span className={classes.line}>{chatRow.msg.text}</span>
          </div>
        </div>
      </div>)
      // <Scrollbars>
      //   <div className={classes.chatRow}>
      //     <div className={classes.avatar}>
      //       <Avatar style={{width: 30, height: 30, marginRight: 5}}/>
      //     </div>
      //     <div className={classes.content}>
      //       <div className={classes.msg}>
      //         <span className={classes.line}>Ridiculus nonumes ea fastidii dicta patrioque natoque ludus ornatus massa. Verterem habitant necessitatibus tellus vituperata habeo volumus.</span>
      //       </div>
      //       <div className={classes.msg}>
      //         <span className={classes.line}>Ridiculus nonumes ea fastidii dicta patrioque natoque ludus ornatus massa. Verterem habitant necessitatibus tellus vituperata habeo volumus.</span>
      //       </div>
      //       <div className={classes.msg}>
      //         <span className={classes.line}>Ridiculus nonumes ea fastidii dicta patrioque natoque ludus ornatus massa. Verterem habitant necessitatibus tellus vituperata habeo volumus.</span>
      //       </div>
      //     </div>
      //   </div>
      //   {/* row */}
      //   <div className={combineClasses(classes.chatRow, classes.self)}>
      //     <div className={classes.content}>
      //       <div className={classes.msg}>
      //         <span className={classes.line}>Ridiculus nonumes ea fastidii dicta</span>
      //         <span className={classes.line}>Ridiculus nonumes ea fastidii dicta</span>
      //       </div>
      //       <div className={classes.msg}>
      //         <span className={classes.line}>Ridiculus nonumes ea fastidii dicta</span>
      //         <span className={classes.line}>Ridiculus nonumes ea fastidii dicta</span>
      //       </div>
      //       <div className={classes.msg}>
      //         <span className={classes.line}>Ridiculus nonumes ea fastidii dicta</span>
      //         <span className={classes.line}>Ridiculus nonumes ea fastidii dicta</span>
      //       </div>
      //     </div>
      //   </div>
      //   {/* row */}
      //   <div className={classes.chatRow}>
      //     <div className={classes.avatar}>
      //       <Avatar style={{width: 30, height: 30, marginRight: 5}}/>
      //     </div>
      //     <div className={classes.content}>
      //       <div className={classes.msg}>
      //         <span className={classes.line}>Ridiculus nonumes ea fastidii dicta patrioque natoque ludus ornatus massa. Verterem habitant necessitatibus tellus vituperata habeo volumus.</span>
      //       </div>
      //       <div className={classes.msg}>
      //         <span className={classes.line}>Ridiculus nonumes ea fastidii dicta patrioque natoque ludus ornatus massa. Verterem habitant necessitatibus tellus vituperata habeo volumus.</span>
      //       </div>
      //       <div className={classes.msg}>
      //         <span className={classes.line}>Ridiculus nonumes ea fastidii dicta patrioque natoque ludus ornatus massa. Verterem habitant necessitatibus tellus vituperata habeo volumus.</span>
      //       </div>
      //     </div>
      //   </div>
      //   {/* row */}
      //   <div className={combineClasses(classes.chatRow, classes.self)}>
      //     <div className={classes.content}>
      //       <div className={classes.msg}>
      //         <span className={classes.line}>Ridiculus nonumes ea fastidii dicta</span>
      //         <span className={classes.line}>Ridiculus nonumes ea fastidii dicta</span>
      //       </div>
      //       <div className={classes.msg}>
      //         <span className={classes.line}>Ridiculus nonumes ea fastidii dicta</span>
      //         <span className={classes.line}>Ridiculus nonumes ea fastidii dicta</span>
      //       </div>
      //       <div className={classes.msg}>
      //         <span className={classes.line}>Ridiculus nonumes ea fastidii dicta</span>
      //         <span className={classes.line}>Ridiculus nonumes ea fastidii dicta</span>
      //       </div>
      //     </div>
      //   </div>
      // </Scrollbars>
  );
}

export default ChatRow;
