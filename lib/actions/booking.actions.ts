export const createBooking = ({ eventId, slug, email }: { eventId: string; slug: string; email: string }) => {
    try{

    }catch (e){
        console.error('create booking failed', e);
        return { success: false, e: e };
    }
}