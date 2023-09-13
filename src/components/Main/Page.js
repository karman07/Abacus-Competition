import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const level = "level" + localStorage.getItem("level");

const Page = (props) => {

  const [number, setnumber] = useState(props.value);
  const total = props.data[level]?.Total || 0;

  useEffect(() => {
    setnumber(props.value)
  })

  return (
    <div>
      <p><b>Page {number/10} || {total/10}</b></p>
      {/* {number==total?useNavigate('/home'):""} */}
    </div>
  );
}

export default Page;
