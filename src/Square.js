/**
 * Created by edchoi on 12/8/16.
 */
import React, { Component } from 'react';

let sampleArticle = (<div>
    <div>
      <b>憲政사상 2번째… 대통령 권한정지, 黃총리가 대행<p>與도 최소 62명 찬성… 헌법재판소 탄핵심판 착수</p>
        <p>朴대통령 "국민께 송구, 憲裁 심판에 담담히 대응"</p><p>野 "黃대행 체제 일단 지켜볼 것"</p></b>
      <p><b></b></p>
      <p>국회는 이날 오후 3시 본회의를 열고 재적 의원 300명 중 299명이 참석한 가운데 찬성 234표, 반대 56표, 무효 7표, 기권 2표로 탄핵안을 가결했다. 야당과 무소속 의원 172명이 탄핵 찬성 의사를 밝힌 점을 감안하면 새누리당에서 최소 62명이 찬성표를 던진 셈이다. 유일하게 투표에 불참한 새누리당 친박계 최경환 의원은 본회의장에 입장했다가 투표 시작 전 퇴장했다. 박 대통령 탄핵소추안에는 '최순실 게이트'와 관련한 헌법 위반 및 직권남용·뇌물죄 등이 적시됐다. 박 대통령은 탄핵안 가결 직후인 오후 5시 국무위원 간담회를 갖고 "저의 부덕과 불찰로 국가적 혼란을 겪게 돼 국민 여러분께 송구하다"며 "헌법재판소의 탄핵 심판과 특검의 수사에 차분하고 담담한 마음가짐으로 대응해나갈 것"이라고 말했다.</p>
      <p></p><p></p><p></p><p><span></span></p>
      </div></div>
);

class Square extends Component {
  render() {
    let style = {
      overflow: "hidden",
      height: this.props.height,
    };
    let imgStyle = {
      maxHeight: this.props.height,
      maxWidth: this.props.width - 30,
      width: 'auto',
      height: 'auto'
    };
    return (
      <div style={{style}}>
        <img style={imgStyle} src="http://imgnews.naver.net/image/023/2016/12/10/2016121000102_1_99_20161210090509.jpg?type=w430"/>
        <br/>
        <br/>
        { sampleArticle }
      </div>
    );
  }
}

export default Square;