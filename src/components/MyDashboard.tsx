import CountUp from 'react-countup'
import useVideoGet from '../hooks/useVideoGet'
import useJournalGet from '../hooks/useJournalGet'
import useUserGet from '../hooks/useUserGet'
import { PieChart } from '@mui/x-charts/PieChart'
import VideoGet from './VideoGet'
import ReactEChart from 'echarts-for-react'
const MyDashboard = () => {
  const { videoGet } = useVideoGet()
  const { journalGet } = useJournalGet()
  const { userGet } = useUserGet()
  const eChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Users', 'Journals', 'Contents'],
    },
    yAxis: {},

    series: {
      data: [
        Number(userGet && userGet.length),
        Number(journalGet && journalGet.length),
        Number(videoGet && videoGet.length),
      ],
      type: 'line',
    },
  }
  return (
    <div className="box-border w-5/6 h-3/5 mx-auto">
      <div className="flex justify-center">
        <h1 className="text-4xl text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 drop-shadow-4xl font-extrabold justify-center">
          Website Summary
        </h1>
      </div>
      <div>
        <ReactEChart option={eChartsOption} />
      </div>
      <div className="flex justify-between ">
        <div className="flex justify-between  h-40 w-64 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="mt-6">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <CountUp end={Number(videoGet && videoGet.length)} duration={3} />
            </h3>
            <p className=" text-gray-500 dark:text-gray-400 font-semibold">Total Contents</p>
          </div>
          <div className="mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between  h-40 w-64 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="mt-6">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <CountUp end={Number(userGet && userGet.length)} duration={3} />
            </h3>
            <p className=" text-gray-500 dark:text-gray-400 font-semibold">Total Users</p>
          </div>
          <div className="mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between  h-40 w-64 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="mt-6">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <CountUp end={Number(journalGet && journalGet.length)} duration={3} />
            </h3>
            <p className=" text-gray-500 dark:text-gray-400 font-semibold">Total Journals</p>
          </div>
          <div className="mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
              <path
                fillRule="evenodd"
                d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z"
                clipRule="evenodd"
              />
              <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 01-3 0V6.75z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex ">
        <div className="flex  h-4/6 w-1/2 mx-auto p-6 mt-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <PieChart
            className="flex justify-center text-bold"
            series={[
              {
                data: [
                  { id: 0, value: Number(userGet && userGet.length), label: 'All Users' },
                  { id: 1, value: Number(journalGet && journalGet.length), label: 'All Journals' },
                  { id: 2, value: Number(videoGet && videoGet.length), label: 'All Contents' },
                ],
              },
            ]}
            width={400}
            height={200}
          />
        </div>
        <div className="flex justify-center h-4/6 ml-12 w-3/5 mx-auto p-6 mt-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div>
            <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Recent Video Added
            </h5>
            {videoGet &&
              videoGet.slice(-1).map((videoData) => {
                return <VideoGet key={videoData.content_id} videoGet={videoData} />
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyDashboard
