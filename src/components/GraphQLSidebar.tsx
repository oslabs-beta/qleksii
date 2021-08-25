import React, { FunctionComponent, useState }  from "react";

type props = {
  onMenuToggle: () => void;
  isMenuOpen: boolean,
  tables: Array<string>,
  fields: Array<object>,
  data: igraphQLData
}

interface igraphQLData {
  Resolvers: string,
  Types: string[],
  Mutations: string, 
  Query: string,
  Mutation: string
}

export const GraphQLSidebar: FunctionComponent<props> = ({ tables, fields, isMenuOpen, onMenuToggle, data}) => {
  const [display, setDisplay] = useState('');
  // console.log(tables);
  // console.log(fields);
  // console.log(data);
  const { Resolvers, Types, Mutations, Query, Mutation} = data;
  const typeArr = [];
  const resArr = [];
  for (let i = 0; i < Types.length; i++) {
    typeArr.push(<li key={i}>{Types[i]}</li>)
  }

  function handleClick(event: any){
    setDisplay(event.target.value);
  }

  return (
    <div className={`sidebar-menu ${isMenuOpen === true ? 'open' : ''}` }>
      <button onClick={handleClick} value={'Resolvers'} >Resolvers</button>
      <button onClick={handleClick} value={'Types'} >Types</button>
      <button onClick={handleClick} value={'Mutations'} >Mutations</button>
      <button onClick={handleClick} value={'Query'} >Query</button>
      <button onClick={handleClick} value={'Query Mutation'} >Query Mutation</button>

      {/* buttons for sidebar */}
      {display === 'Resolvers' ? <ul className='sidebar-list-title'><li>Resolvers</li><ul className='sidebar-list-info'>{Resolvers}</ul> </ul>: null}
      {display === 'Types' ? <ul className='sidebar-list-title'><li>Types</li><ul className='sidebar-list-info'>{typeArr}</ul> </ul>: null}
      {display === 'Mutations' ? <ul className='sidebar-list-title'><li>Mutations</li><ul className='sidebar-list-info'>{Mutations}</ul> </ul>: null}
      {display === 'Query' ? <ul className='sidebar-list-title'><li>Query</li><ul className='sidebar-list-info'>{Query}</ul> </ul>: null}
      {display === 'Query Mutation' ? <ul className='sidebar-list-title'><li>Query Mutation</li><ul className='sidebar-list-info'>{Mutation}</ul> </ul>: null}

      {/* <ul className='sidebar-list'>
        <li>Resolvers</li>
        <ul className='sidebar-list'>
        {Resolvers}
        </ul>
      </ul>
      <ul className='sidebar-list'>
        <li>Types</li>
        <ul className='sidebar-list'>
        {typeArr}
        </ul>
      </ul>
      <ul className='sidebar-list'>
        <li>Mutations</li>
        <ul className='sidebar-list'>
        {Mutations}
        </ul>
      </ul> */}
    </div>
  )
}