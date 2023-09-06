from setuptools import setup, find_packages

setup(
    name='rulz_ai',
    version='3.0.0',
    author='Reborn Rulz',
    author_email='r3b0rnrulz@email.com',
    description='Rulz-AI is a Large Language Model trained in vast data.',
    packages=find_packages(),
    classifiers=[
        'Development Status :: 3 - Alpha',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3.8',
        'Topic :: Scientific/Engineering :: Artificial Intelligence',
        'Topic :: Software Development :: Libraries :: Python Modules',
    ],
    install_requires=[
        'rasa-x',
    ],
)