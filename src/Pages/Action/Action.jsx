import { useQuery } from '@tanstack/react-query';
import ContactCard from './ContactCard';

const Action = () => {

    const { isLoading, refetch, data: contacts = [] } = useQuery({
        queryKey: ['carts'],
        queryFn: async () => {
            const response = await fetch(`https://contact-management-server-ten.vercel.app/contacts`);
            const data = await response.json();
            return data;
        },
    });

    // console.log(contacts);


    return (
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-2 `}>
            {
                contacts.map(contact => <ContactCard
                    key={contact._id}
                    contact={contact}
                    refetch={refetch}
                >
                </ContactCard>)
            }
        </div>
    );
};

export default Action;