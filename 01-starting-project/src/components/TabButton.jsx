export default function TabButton ({children, onSelect}){


return  (<li>
    <button onClick={onSelect}>{children}</button>
</li>
);
};

//Every custom component will reciebe props as default