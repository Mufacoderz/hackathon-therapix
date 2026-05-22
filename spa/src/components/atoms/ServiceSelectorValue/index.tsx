import  ServiceSelectorAiForm  from '@/components/atoms/ServiceSelectorAiForm';
import  ServiceSelectorBasicForm  from '@/components/atoms/ServiceSelectorBasicForm';

export default function ServiceSelectorValue({ setActiveTab }: { setActiveTab: string }) {
    return (
 <div>
            <div className="flex md:grid md:w-full md:h-auto border-2 rounded-xl border-[#8B6B52] w-84 justify-center mx-auto">
                <div className='p-4'>
                {
                    setActiveTab === 'aiform' ?
                        <>
                            <ServiceSelectorAiForm />
                        </>
                        :
                        <>
                            <ServiceSelectorBasicForm />
                        </>
                }
                </div>
            </div>
        </div>
    )
}