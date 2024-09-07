import React, { useState } from 'react';
import styled from 'styled-components';
import flower from '../assets/images/flower.svg';
import comment from '../assets/images/comment.svg';
import demoImg from '../assets/images/demo2.png';
import Modal from '../components/Modal';
import ModifyModal from '../components/ModifyModal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal2 from "../components/CommentModal2";

    const MemoryDetail = () => {
        const [isDelOpen, setIsDelOpen] = useState(false);
        const [isModifyOpen, setIsModifyOpen] = useState(false);
        const [startDate, setStartDate] = useState(new Date());
        const [inputValue, setInputValue] = useState('');
        const [items, setItems] = useState([]);
        const [fileName, setFileName] = useState('');
        const [commentArr, setCommentArr] = useState([]);
        const [editingIndex, setEditingIndex] = useState(null);
        const [deletingIndex, setDeletingIndex] = useState(null);
        
        const handleEditClick = (index) => {
            setEditingIndex(index);
        };
        
        const handleDeleteClick = (index) => {
            setDeletingIndex(index);
        };
        const handleEditSubmit = (updatedComment, index) => {
            const updatedComments = [...commentArr];
            updatedComments[index] = updatedComment;
            setCommentArr(updatedComments);
            setEditingIndex(null); // 수정 폼 닫기
        };
        

        const handleDeleteSubmit = (index) => {
            const updatedComments = commentArr.filter((_, i) => i !== index);
            setCommentArr(updatedComments);
            setDeletingIndex(null); // 삭제 폼 닫기
        };

    


        const handleDelete = (index) => {
            setItems(items.filter((_, i) => i !== index)); // 해당 인덱스의 항목을 제외하고 배열 업데이트
        };

        const handleInputChange = (event) => {
            setInputValue(event.target.value);
        };

        const handleKeyPress = (event) => {
            if (event.key === 'Enter' && inputValue.trim() !== '') {
                // 중복 확인: 입력 값이 배열에 존재하지 않는 경우에만 추가
                if (!items.includes(inputValue)) {
                    setItems([...items, inputValue]); // 배열에 새 값 추가
                }
                setInputValue(''); // 입력 필드 초기화
            }
        };


        const handleFileChange = (event) => {
            const file = event.target.files[0]; // 선택된 파일을 가져옵니다.
            if (file) {
                setFileName(file.name); // 파일명이 있으면 상태를 업데이트합니다.
            } else {
                setFileName(''); // 파일이 선택되지 않으면 상태를 초기화합니다.
            }
        };

        const handleModify = () => {
            setIsModifyOpen(true);
        }
        const handleDel = () => {
            setIsDelOpen(true)
        }

        const handleAddComment = (newComment) => {
            setCommentArr((prevComments) => [newComment, ...prevComments]);
        };
        


        return (
            <>
            <PostList>
                {isModifyOpen && (
                    <ModifyModal setIsOpend={setIsModifyOpen} styles={{ backgroundColor: "#fff", padding: "40px 80px", textAlign: "left" }}>
                        <h2 style={{ textAlign: "center" }}>추억 수정</h2>
                        <ModalFlexBox>
                            <ModalLeft>

                                <FormGroup>
                                    <label htmlFor="name" style={{ display: 'block' }}>닉네임</label>
                                    <input placeholder='닉네임을 입력해주세요' type="text" id="name" />
                                </FormGroup>
                                <FormGroup>
                                    <label htmlFor="title" style={{ display: 'block' }}>제목</label>
                                    <input placeholder='제목을 입력해 주세요' type="text" id="title" />
                                </FormGroup>
                                <FormGroup>
                                    <strong>이미지</strong>
                                    <FileUpload>

                                        <input class="upload-name" value={fileName} laceholder="첨부파일" />
                                        <label htmlfor="file">파일 선택</label>
                                        <input type="file" id="file" onChange={handleFileChange} />

                                    </FileUpload>
                                </FormGroup>
                                <FormGroup>
                                    <label htmlFor="MainText" style={{ display: 'block' }}>본문</label>
                                    <textarea name="MainText" id="MainText"></textarea>
                                </FormGroup>

                            </ModalLeft>
                            <ModalRight>
                                <FormGroup>
                                    <label htmlFor="Tag" style={{ display: 'block' }}>태그</label>
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        onKeyUp={handleKeyPress}
                                        placeholder="입력 후 엔터를 눌러 추가하세요"
                                    />
                                    <ul style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                                        {items.map((item, index) => (
                                            <NostelgiaList key={index}>
                                                #{item}
                                                <button onClick={() => handleDelete(index)}>X</button>
                                            </NostelgiaList>
                                        ))}
                                    </ul>
                                </FormGroup>
                                <FormGroup>
                                    <label htmlFor="Place" style={{ display: 'block' }}>장소</label>
                                    <input type="text" id="Place" placeholder='장소를 입력해주세요' />


                                </FormGroup>
                                <FormGroup>
                                    <DayMonthYear>
                                        <label htmlFor="Place" style={{ display: 'block' }}>추억의 순간</label>
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            dateFormat="Pp" // 날짜와 시간 형식
                                        />
                                    </DayMonthYear>

                                    {/* <input type="text" id="Date" placeholder='YYYY-MM-DD'/> */}
                                </FormGroup>
                                <FormGroup>

                                    <GroupPriv>
                                        <label style={{ display: 'block' }}>추억 공개 선택</label>
                                        <label class="check_container">

                                            <input type="checkbox" id="groupPrivate" />
                                            <span></span>
                                        </label>

                                    </GroupPriv>
                                </FormGroup>
                                <FormGroup>
                                    <label htmlFor="PW" style={{ display: 'block' }}>수정권한 인증</label>
                                    <input type="text" id="PW" placeholder="추억 비밀번호를 입력해 주세요" />
                                </FormGroup>
                            </ModalRight>
                            
                        </ModalFlexBox>
                        <ModifyButton>삭제하기</ModifyButton>
                    </ModifyModal>
                )}
                {isDelOpen && (
                    <Modal setIsOpend={setIsDelOpen} styles={{ backgroundColor: '#fff', padding: '40px', textAlign: 'left' }}>
                        <h2 style={{ textAlign: 'center', fontSize: "24px", color: "#282828", marginBottom: "40px" }}>추억 삭제</h2>
                        <FormGroup>
                            <label htmlFor="delete" style={{ display: 'block' }}>삭제 권한 인증</label>
                            <input placeholder='추억 비밀번호를 입력해 주세요' type="text" id="delete" />
                        </FormGroup>
                        <ModifyButton>삭제하기</ModifyButton>
                    </Modal>
                )}

                <MemoryDetailHeader>
                    <DetailHeaderTop>
                        <HeaderTopLeft>
                            <span className='name'>달봉이</span>
                            <span className="private">공개</span>
                        </HeaderTopLeft>
                        <HeaderTopRight>
                            <button className="modi" onClick={handleModify}>추억 수정하기</button>
                            <button className="del" onClick={handleDel}>추억 삭제하기</button>
                        </HeaderTopRight>
                    </DetailHeaderTop>
                    <MemoryTitle>인천 앞바다에서 무려 60cm 월척을 낚다!</MemoryTitle>
                    <Tags>
                        <span>#인천</span>
                        <span>#낚시</span>
                    </Tags>
                    <MemoryDetailBottom>
                        <DetailBottomLeft>
                            <div className='placeDate'>
                                <span className='place'>인천 앞바다</span>·
                                <span className='date'>24.01.19</span>
                            </div>
                            <div className="commentLike">
                                <span className='like'><i></i> 120</span>
                                <span className='comment'><i></i>8</span>
                            </div>
                        </DetailBottomLeft>
                        <DetailBottomRight>
                            <button><i></i> 공감 보내기</button>
                        </DetailBottomRight>
                    </MemoryDetailBottom>
                </MemoryDetailHeader>

                <MemoryContent>
                    <TextWrap>
                        <TitleImage src={demoImg}></TitleImage>
                        <p>
                            인천 앞바다에서 월척을 낚았습니다! <br />
                            가족들과 기억에 오래도록 남을 멋진 하루였어요 가족들과 <br />기억에 오래도록 남을 멋진 하루였어요 가족들과 기억에오래도록 남을 멋진 하루였어요<br />
                            <br />
                            인천 앞바다에서 월척을 낚았습니다!<br />
                            가족들과 기억에 오래도록 남을 멋진 하루였어요<br />
                            <br />
                            인천 앞바다에서 월척을 낚았습니다!<br />
                        </p>
                    </TextWrap>
                    <SignUpButton><Modal2 onAddComment={handleAddComment}/></SignUpButton>
                </MemoryContent>
                <CommentArea>
                    <CommentHeader>
                        <div>댓글 <span>{commentArr.length}</span></div>
                    </CommentHeader>
                    <CommentBody>
                        {commentArr.length === 0?(
                            <NoComment>
                            <p>등록된 댓글이 없습니다.</p>
                            <span>가장 먼저 댓글을 등록해 보세요!</span>
                        </NoComment>
                        ) :(
                            <ul>
                {commentArr.map((comment, index) => (
                <li key={index}>
                    <strong>{comment.nickname}</strong>: {comment.comment}
                </li>
                ))}
            </ul>
                        )}
                    </CommentBody>
                </CommentArea>
            </PostList>
            </>
        )
    }
    export default MemoryDetail;

const PostList = styled.div`
    max-width:1540px;
    margin:auto;
`

const MemoryDetailHeader = styled.div`
width:100%;
padding-bottom:60px;
border-bottom:1px solid #dddddd;
margin-bottom:60px;
`
const DetailHeaderTop = styled.div`
    display:flex;
    width:100%;
    justify-content: space-between;
`
const HeaderTopLeft = styled.div`
    .name {
        font-size:16px;
        margin-right:20px;
    }
    .private {
        padding-left:1rem;
        border-left:1px solid #bbb;
        color:#bbb;
    }
`

const HeaderTopRight = styled.div`
    display:flex;
    button{
        border:none;
        background-color:unset;
        font-size:14px;
    }
    .del{
        color:#8d8d8d;
        margin-left:60px;
    }
`

const MemoryTitle = styled.div`
    font-size:30px;
    font-weight:700;
    margin-top:20px;
    margin-bottom:20px;
`
const Tags = styled.div`
    margin-bottom:30px;
    span{
        margin-right:10px;
        color:#bbbbbb;
        font-size:18px;
    }
`
const MemoryDetailBottom = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`
const DetailBottomLeft = styled.div`
    display:flex;
    font-size:16px;
    font-weight:700;
    .place{
        margin-right:10px;

    }
    .date{
        margin-left:10px;
    }
    .commentLike{
        margin-left:1rem;
        color:#8d8d8d;
        font-weight:400;
    }
    .commentLike span{
        display:inline-flex;
        height:22px;
        align-items: center;
        margin-right:0.5rem;
    }
    .commentLike span i {
        display:block;
        width:22px;
        height:100%;
        margin-right:0.25rem;
        background:no-repeat center / contain;
        
    }
    .commentLike span.like i{
        background-image:url(${flower});
    }
    .commentLike span.comment i{
        background-image:url(${comment});
    }

`
const DetailBottomRight = styled.div`
    
    button{
        border:1px solid #282828;
        padding:15px 40px;
        display:inline-flex;
        align-items: center;
        gap:10px;
        border-radius:6px;
        font-size:1rem;
        font-weight:500;
        background-color: #fff;
        i{
            height:22px;
            width:22px;
            display:inline-block;
            background:url(${flower}) no-repeat center / contain;
        }
    }

`
const MemoryContent = styled.div`
`
const TextWrap = styled.div`
    max-width:780px;
    margin:auto;
`

const TitleImage = styled.img`
    width:100%;
`
const SignUpButton = styled.button`
    display:block;
    margin:120px auto 80px;
    padding:5px 80px;
    font-size:16px;
    background-color:#282828;
    border-radius: 6px;;
    cursor:pointer;
`
const CommentArea = styled.div`
    width:100%;
    min-height:300px;
    margin:auto;
`
const CommentHeader = styled.div`
    width:100%;
    padding-top:10px;
    padding-bottom:10px;
    border-bottom:1px solid #282828;
    div{
        font-size:18px;
        font-weight:500;
    }
`
const CommentBody = styled.div`

    height:100%;
`
const NoComment = styled.div`
    width:100%;
    text-align: center;;
    margin-top:80px;
    p{
        font-size:18px;
        font-weight:700;
        color:#8d8d8d;
    }
    span{
        font-size:14px;
        color:#b8b8b8;
        font-weight:400;
    }
`


const FormGroup = styled.div`
  margin-top:40px;
  label{
    display:block;
    margin-bottom:10px;
    font-weight:500;
    line-height:20px;
  }
  input{
    width:100%;
    border-radius:6px;
    padding:14px 20px;
    box-sizing:border-box;
    font-size:14px;
    color:#282828;
    border:1px solid #dddddd;
  }
  textarea{
    width:100%;
    border-radius:6px;
    border:1px solid #dddddd;
    height:120px;
  }
  strong{
        display:block;
    margin-bottom:10px;
    font-weight:500;
    line-height:20px;
  }
`

const ModifyButton = styled.button`
  width:100%;
  border:none;
  color:#fff;
  background:#282828;
  margin-top:40px;
  padding:15px;
  font-size:16px;
  border-radius:6px;
  max-width:400px;
  margin:40px auto 1rem;
  display:block;
`

const ModalFlexBox = styled.div`
    display:flex;
`
const ModalLeft = styled.div`
    padding-right:40px;
    width:calc(50% - 40px);
`
const ModalRight = styled.div`
    padding-left:40px;
    width:calc(50% - 40px);
`


const FileUpload = styled.div`
display:flex;
align-items: center;;
  
  .upload-name{

    box-sizing:border-box;
    display: inline-block;
    padding: 14px 20px;
    vertical-align: middle;
    border: 1px solid #dddddd;
    flex:1;
    color: #999999;
    width:auto;
  }
  label{
    display: inline-block;
    padding: 14px 24px;
    color: #fff;
    vertical-align: middle;
    background-color: #999999;
    font-size:14px;
    margin-bottom:0;
    text-align: center;
    cursor: pointer;
    margin-left: 10px;
    border:1px solid #282828;
    box-sizing:border-box;
    background:unset;
    color:#282828;
    border-radius:6px;
  }
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
}
`



const GroupPriv = styled.div`
label.check_container {
  display: inline-block;
  position: relative;
  padding-left: 30px; /* 커스텀 체크박스의 크기에 따라 여백 조정 */
  cursor: pointer;
  font-size: 18px;
  user-select: none; /* 텍스트 드래그 방지 */

}


  input[type="checkbox"]:checked + span {
    background-color:#000;
}
  input{
    display:none;
  }
  span{
    position: absolute;
  top: 0;
  left: 0;
  height: 24px; /* 체크박스의 높이 */
  width: 48px; /* 체크박스의 너비 */
  background-color: #ccc; /* 기본 체크박스 색상 */
  border-radius: 50px; /* 체크박스를 둥글게 만들고 싶을 때 */
  transition:all 0.5s
  }
  span::after{ 
  content: "";
  position: absolute;
  display: block;
  }
  input[type="checkbox"]:checked + span:after{
    display: block;
    left:calc(100% - 22px)
  }
  span:after{
  top:50%;
  transform:translateY(-50%);
  left:2px;
  width: 20px;
  height: 20px;
  border-radius:50%;
  background-color:#fff;
  transition:all 0.5s;
  }
`
const DayMonthYear = styled.div`
    /* 날짜 선택기의 전체 컨테이너 스타일 */
.react-datepicker {
  font-size: 12px; /* 전체 글꼴 크기 */
  border-radius: 10px; /* 모서리 둥글게 */
  border: 1px solid #ccc; /* 테두리 색상 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
}

/* 날짜 선택기의 헤더 부분 스타일 */
.react-datepicker__header {
  background-color: #ffffff; /* 헤더 배경색 */
  border-bottom: 1px solid #ddd; /* 헤더 하단 테두리 */
  font-weight: bold; /* 헤더 텍스트 굵게 */
}

/* 요일 스타일 */
.react-datepicker__day-name {
  color: #888; /* 요일 색상 */
  font-weight: normal; /* 요일 텍스트 굵기 */
}

/* 주말 날짜 스타일 */
.react-datepicker__day--weekend {
  color: #e74c3c; /* 주말 날짜 색상 (빨간색) */
}

/* 선택된 날짜 스타일 */
.react-datepicker__day--selected {
  background-color: #3498db; /* 선택된 날짜 배경색 */
  color: #fff; /* 선택된 날짜 글자 색상 */
  border-radius: 50%; /* 선택된 날짜 모서리를 둥글게 */
}

/* 오늘 날짜 스타일 */
.react-datepicker__day--today {
  font-weight: bold; /* 오늘 날짜 텍스트 굵게 */
  color: #2c3e50; /* 오늘 날짜 색상 */
}

/* 월 선택기 스타일 */
.react-datepicker__month-dropdown-container,
.react-datepicker__year-dropdown-container {
  font-size: 14px; /* 월/년 선택기의 글꼴 크기 */
}
`

const NostelgiaList = styled.li`
    list-style-type: none;
    background-color:#eee;
    font-size:14px;
    padding:2px 4px;

    button{
        font-size:14px;
        cursor: pointer;
        border:none;
        background-color:none;
    }
`

const CommentContainer = styled.div`
    margin-top:10px;
`;