/* ===== EDIT YOUR DATA HERE ===== */
const DATA = {
 "name": "Kanishk Patel",
 "roleLines": [
  "Robotics",
  "Control",
  "& ML"
 ],
 "tagline": "Mechanical engineering student building robot arms, vision and learning systems, mostly in simulation for now.",
 "location": "IIT Tirupati · IIT Madras",
 "email": "kanishkpatel0206@gmail.com",
 "available": "Open to internships & collaborations in robotics, automation and ML",
 "bio": [
  "I’m a mechanical engineering student at IIT Tirupati, also pursuing the BS in Data Science & Applications at IIT Madras (online). I enjoy the space where mechatronics, control and machine learning meet.",
  "So far my projects live in simulation — ROS 2 and Gazebo for robot arms, Simulink and Simscape for mechanisms and dynamics — with OpenCV, YOLO and PyTorch on the vision side.",
  "I’m learning C++, deep learning and sensor fusion, and I’m open to internships and collaborations in robotics, automation and applied ML."
 ],
 "folders": [
  {
   "title": "Robotics",
   "projects": [
    {
     "name": "2-DOF Arm + Camera",
     "role": "ROS 2 simulation",
     "tags": [
      "ROS 2",
      "Python",
      "Gazebo"
     ],
     "desc": "ROS 2 simulation of a robotic arm with an onboard camera feed. Square-trajectory control in Gazebo Ignition Fortress, visualised in RViz2.",
     "url": "https://github.com/KanishkPatel0206/2-degree-arm-with-camera-sensor",
     "linkLabel": "view on GitHub"
    },
    {
     "name": "MATLAB 2-DOF Arm Sim",
     "role": "Control simulation",
     "tags": [
      "MATLAB",
      "Simulink"
     ],
     "desc": "Simulink model of a 2-DOF arm tracking sine and square-wave trajectories, with joint kinematics and forward dynamics.",
     "url": "https://github.com/KanishkPatel0206/Matlab_2dof_arm_simulation",
     "linkLabel": "view on GitHub"
    },
    {
     "name": "Kinova Gen3 Trajectory",
     "role": "Motion planning",
     "tags": [
      "MATLAB",
      "Inverse kinematics",
      "Robotics Toolbox"
     ],
     "desc": "Full motion pipeline for the 7-DOF Kinova Gen3 in MATLAB: a custom damped least-squares IK solver, cubic joint-space trajectories with continuous velocity through five Cartesian waypoints, and live animation. Includes unit tests for the solver and the trajectory generator.",
     "url": "https://github.com/KanishkPatel0206/kinova-gen3-trajectory",
     "linkLabel": "view on GitHub"
    },
    {
     "name": "AGV Path Planning",
     "role": "PyBullet simulation",
     "tags": [
      "Python",
      "PyBullet",
      "A*"
     ],
     "desc": "An autonomous guided vehicle navigating a procedurally generated 3D warehouse in PyBullet. A* plans a route across a 40x40 occupancy grid of shelves, the AGV follows it with animated wheels, and a Tkinter dashboard tracks its status from mapping to destination reached.",
     "url": "https://github.com/KanishkPatel0206/PyBullet_PathPlanning",
     "linkLabel": "view on GitHub"
    },
    {
     "name": "RoboLab Web",
     "role": "Collaboration with Atharva Bhosale",
     "tags": [
      "JavaScript",
      "Three.js",
      "Kinematics"
     ],
     "desc": "A browser-based robotics studio: build manipulators, edit DH parameters, solve forward and inverse kinematics, analyse Jacobians, simulate dynamics, plan trajectories and explore 3D workspaces, with no install or backend. The idea and original engine are Atharva Bhosale’s (github.com/batharva/robolab-web); most of the build on top of it was done by me.",
     "url": "https://batharva.github.io/robolab-web/",
     "linkLabel": "open live demo ↗"
    }
   ]
  },
  {
   "title": "Mechanisms",
   "projects": [
    {
     "name": "Shaper Mechanism",
     "role": "Course project",
     "tags": [
      "MATLAB",
      "Simscape"
     ],
     "desc": "Six-link quick-return kinematic chain modelled in Simscape Multibody (MATLAB R2025b), with position, velocity and acceleration analysis. A Theory of Machines project.",
     "url": "https://github.com/KanishkPatel0206/Shaper-Mechanism-Quick-Return-Simulation",
     "linkLabel": "view on GitHub"
    }
   ]
  },
  {
   "title": "Machine Learning",
   "projects": [
    {
     "name": "Breast Cancer Classifier",
     "role": "Machine learning",
     "tags": [
      "Python",
      "scikit-learn"
     ],
     "desc": "Logistic regression on the Wisconsin dataset reaching 97% test accuracy, with a confusion matrix, precision/recall and feature-importance analysis.",
     "url": "https://github.com/KanishkPatel0206/Logistic_Regression_in_python",
     "linkLabel": "view on GitHub"
    },
    {
     "name": "Point Cloud Visualisation",
     "role": "3D perception",
     "tags": [
      "Python",
      "Open3D",
      "PyVista"
     ],
     "desc": "Scripts that load and visualise a LiDAR point cloud (.ply) with Open3D, PyVista and PyntCloud, including voxel-grid downsampling with an adjustable voxel size.",
     "url": "https://github.com/KanishkPatel0206/point_cloud_data_visualise_and_path",
     "linkLabel": "view on GitHub"
    }
   ]
  },
  {
   "title": "Reinforcement Learning",
   "projects": [
    {
     "name": "Line Follower (Pygame RL)",
     "role": "Reinforcement learning",
     "tags": [
      "Python",
      "Q-learning",
      "Pygame",
      "NumPy"
     ],
     "desc": "A differential-drive line follower with five IR sensors, wrapped in a Gym-style environment and trained with tabular Q-learning. The Q-table trains in about a minute on a CPU, is evaluated on unseen random tracks, and is small enough to hard-code on a microcontroller.",
     "url": "https://github.com/KanishkPatel0206/LineFollower",
     "linkLabel": "view on GitHub"
    },
    {
     "name": "Line Follower in Webots",
     "role": "Sim-to-sim transfer",
     "tags": [
      "Webots",
      "Python",
      "Q-learning"
     ],
     "desc": "The Q-table from the Pygame line follower carried into a Webots world, using the same sensor discretisation, a textured track and a controller that starts automatically when you press play.",
     "url": "https://github.com/KanishkPatel0206/line_follower_in_webots",
     "linkLabel": "view on GitHub"
    },
    {
     "name": "Multi-Agent Snake DQN",
     "role": "Reinforcement learning",
     "tags": [
      "Python",
      "DQN",
      "Stable-Baselines3",
      "Pygame"
     ],
     "desc": "Trains up to 12 DQN agents at once on a custom Gymnasium Snake environment, with a live Pygame dashboard of each agent’s score and epsilon. Supports new, resume and fine-tune runs, auto-saved checkpoints, and a showcase mode that can record the best agent to video.",
     "url": "https://github.com/KanishkPatel0206/RL_Application_in_Snakes_game",
     "linkLabel": "view on GitHub"
    }
   ]
  },
  {
   "title": "Software Tools",
   "projects": [
    {
     "name": "Room Booking System",
     "role": "Software project",
     "tags": [
      "Python",
      "Pygame",
      "C++"
     ],
     "desc": "A conference-room booking system for IIT Tirupati: a Pygame interface in front of a C++ backend (with a Python fallback), handling rooms, time-slotted bookings and admin and user roles with hashed passwords.",
     "url": "https://github.com/KanishkPatel0206/Room-Bookings",
     "linkLabel": "view on GitHub"
    },
    {
     "name": "Folder Organizer",
     "role": "Desktop tool",
     "tags": [
      "Python",
      "CustomTkinter"
     ],
     "desc": "A desktop tool that sorts a messy folder by file type using heuristic rules. It previews a dry-run plan first, only ever moves files (never deletes), skips folders that look like installed programs or dev projects, and keeps an undo log for the last run.",
     "url": "https://github.com/KanishkPatel0206/Folder_Organizer",
     "linkLabel": "view on GitHub"
    }
   ]
  },
  {
   "title": "In Progress",
   "projects": [
    {
     "name": "Vision Pipeline",
     "role": "Work in progress",
     "tags": [
      "YOLO",
      "OpenCV"
     ],
     "desc": "Real-time YOLO + OpenCV inference on custom datasets.",
     "url": "",
     "linkLabel": "view on GitHub"
    },
    {
     "name": "ROS 2 Arm, next steps",
     "role": "Work in progress",
     "tags": [
      "ROS 2",
      "Sensor fusion"
     ],
     "desc": "Advancing the arm’s control with sensor fusion and closed-loop feedback.",
     "url": "",
     "linkLabel": "view on GitHub"
    }
   ]
  }
 ],
 "skills": [
  "Python",
  "MATLAB",
  "ROS 2",
  "Simulink",
  "OpenCV",
  "YOLO",
  "PyTorch",
  "scikit-learn",
  "NumPy",
  "PyBullet",
  "Webots",
  "Stable-Baselines3",
  "Open3D",
  "JavaScript"
 ],
 "now": [
  "Building a real-time YOLO + OpenCV vision pipeline",
  "Adding sensor fusion to my ROS 2 robotic arm",
  "Deepening ML foundations in the IIT Madras DS programme",
  "Learning C++ and deep learning"
 ],
 "education": [
  {
   "role": "Mechanical Engineering, IIT Tirupati",
   "when": "Currently studying",
   "desc": "Coursework includes Theory of Machines, which led to the Simscape quick-return mechanism project."
  },
  {
   "role": "BS in Data Science & Applications, IIT Madras (online)",
   "when": "Currently studying",
   "desc": "Building the machine learning foundations behind my vision and reinforcement learning projects."
  }
 ],
 "links": [
  [
   "GitHub",
   "@KanishkPatel0206",
   "https://github.com/KanishkPatel0206"
  ],
  [
   "Email",
   "kanishkpatel0206@gmail.com",
   "mailto:kanishkpatel0206@gmail.com"
  ]
 ],
 "faq": [
  [
   "What do you do?",
   "I’m a mechanical engineering student at IIT Tirupati and an IIT Madras data science student, working on robotics, control, computer vision and machine learning."
  ],
  [
   "Are you available?",
   "Yes — I’m open to internships and collaborations. Email me and I’ll reply soon."
  ],
  [
   "How do I reach you?",
   "Use the contact page, or write to kanishkpatel0206@gmail.com."
  ],
  [
   "What tools do you use?",
   "Python, MATLAB and Simulink, ROS 2 and Gazebo, PyBullet and Webots, OpenCV, YOLO, PyTorch, scikit-learn and Stable-Baselines3."
  ],
  [
   "What have you built?",
   "A ROS 2 arm with a camera in Gazebo, a Kinova Gen3 IK and trajectory planner, a PyBullet warehouse AGV with A*, RL line followers and a multi-agent Snake DQN, RoboLab Web (a browser robotics studio built with Atharva Bhosale), a Simscape quick-return mechanism, and a breast-cancer classifier with 97% test accuracy. They’re all listed in Selected work."
  ],
  [
   "What are you working on?",
   "A real-time YOLO + OpenCV vision pipeline, and sensor fusion plus closed-loop control for my ROS 2 arm."
  ]
 ]
};
